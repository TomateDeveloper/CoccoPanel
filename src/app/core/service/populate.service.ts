import {DatabaseReference, Model, PopulatedReferences, PopulateRegistry} from "../model/model.dto";
import {HttpClient} from "@angular/common/http";
import {FirestoreService} from "./firestore.service";
import {forkJoin, map, mergeMap, Observable, of} from "rxjs";
import {PopulationAdapter} from "../../shared/model/PopulationAdapter";

export abstract class PopulateService<P extends Model, M extends Model> extends FirestoreService<P, M> {

    protected constructor(database: string, client: HttpClient) {
        super(database, client);
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

    public override queryRaw<OverrideModel extends Model>(query: any, overrideCollection?: string): Observable<OverrideModel[]> {
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
     */
    public generateModelReferences<T extends Model>(model: T): Observable<PopulatedReferences[]> {
        return of(PopulationAdapter.getPopulateRegistry(model)).pipe(
            mergeMap(registry =>
                forkJoin(
                    registry.map(item => this.queryRaw(PopulationAdapter.generateRawQuery(item), item.databaseCollection).pipe(
                        map(results => ({objects: results, databaseCollection: item.databaseCollection}))
                    ))
                )
            )
        );
    }

    private populationPredicate<T extends Model>(model: T): Observable<T> {
        return this.generateModelReferences(model).pipe(
            map(references => PopulationAdapter.replaceModelReferences(model, references))
        );
    }

}
