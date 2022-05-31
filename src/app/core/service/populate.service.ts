import {DatabaseReference, Model, PopulatedReferences, PopulateRegistry} from "../model/model.dto";
import {HttpClient} from "@angular/common/http";
import {FirestoreService} from "./firestore.service";
import {forkJoin, map, mergeAll, mergeMap, Observable, of} from "rxjs";
import {PopulationAdapter} from "../../shared/model/PopulationAdapter";

export abstract class PopulateService<P extends Model, M extends Model> extends FirestoreService<P, M> {

    protected constructor(database: string, client: HttpClient) {
        super(database, client);
        throw new Error("Unimplemented, pending to test");
    }

    public override create(partial: P): Observable<M> {
        return this.createRaw<P, M>(partial, this.getDatabase());
    }

    public override createRaw<OverridePartial extends Model, OverrideModel extends Model>(partial: OverridePartial, overrideCollection: string): Observable<OverrideModel> {
        return super.createRaw<OverridePartial, OverrideModel>(partial, overrideCollection).pipe(
            mergeMap(model => this.populationPredicate(model))
        );
    }

    public override get(id: string): Observable<M> {
        return this.getRaw(id, this.getDatabase());
    }

    public override getRaw<OverrideModel extends Model>(id: string, overrideCollection: string): Observable<OverrideModel> {
        return super.getRaw<OverrideModel>(id, overrideCollection).pipe(
            mergeMap(model => this.populationPredicate(model))
        );
    }

    public override query(query: any): Observable<M[]> {
        return this.queryRaw(query, this.getDatabase());
    }

    public override queryRaw<OverrideModel extends Model>(query: any, overrideCollection?: string, sanitized?: boolean): Observable<OverrideModel[]> {
        return super.queryRaw<OverrideModel>(query, overrideCollection).pipe(
            mergeMap(query =>
                forkJoin(query.map(result => this.populationPredicate(result)))
            )
        );
    }

    public override update(model: M): Observable<any> {
        return this.updateRaw<M>(model, this.getDatabase());
    }

    public override updateRaw<OverrideModel extends Model>(model: M, overrideCollection?: string): Observable<any> {
        return super.updateRaw<OverrideModel>(model, overrideCollection).pipe(
            mergeMap(model => this.populationPredicate(model))
        );
    }

    /**
     * Queries every {@link DatabaseReference} population from the {@link PopulateRegistry}
     * @param model
     * @param sanitized
     */
    public generateModelReferences<T extends Model>(model: T, sanitized?: boolean): Observable<PopulatedReferences[]> {
        return of(PopulationAdapter.getPopulateRegistry(model)).pipe(
            mergeMap(registry => {

                if (registry.length === 0) {
                    return [];
                }

                return forkJoin(
                    registry.map(item => (sanitized ? this.queryChunk(item.ids, item) : this.fixQuery(item)).pipe(
                        map(results => ({objects: results, databaseCollection: item.databaseCollection}))
                    ))
                );

            })
        );
    }

    /**
     * Workaround to bypass max of 10 items per query.
     * @param item
     */
    public fixQuery<T extends Model>(item: PopulateRegistry): Observable<T[]> {

        const idChunks: string[][] = [];

        const chunkSize = 10;
        for (let i = 0; i < item.ids.length; i += chunkSize) {
            const chunk = item.ids.slice(i, i + chunkSize);
            idChunks.push(chunk);
        }

        const dividedObservables: Observable<T[]>[] = [];

        for (let i = 0; i < idChunks.length; i++) {
            const observable = this.queryChunk<T>(idChunks[i], item, true);
            dividedObservables.push(observable);
        }

        return forkJoin(dividedObservables).pipe(mergeAll());
    }

    private queryChunk<T extends Model>(ids: string[], item: PopulateRegistry, sanitized?: boolean): Observable<T[]> {
        return this.queryRaw<T>(PopulationAdapter.generateRawQuery(
            {...item, ids},
            this.getOriginURL().split("https://firestore.googleapis.com/v1/")[1],
        ), item.databaseCollection, sanitized);
    }

    private populationPredicate<T extends Model>(model: T, sanitized?: boolean): Observable<T> {
        return this.generateModelReferences(model, sanitized).pipe(
            map(references => PopulationAdapter.replaceModelReferences(model, references))
        );
    }

}
