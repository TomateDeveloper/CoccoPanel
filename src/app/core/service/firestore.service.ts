import {Model} from "../model/model.dto";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FirestoreAdapter} from "../../shared/model/FirestoreAdapter";
import {FirestoreDocument, FirestoreQuery} from "../../shared/model/FirestoreDocument";

export abstract class FirestoreService<P extends Model, M extends Model> {

    private readonly database: string;
    public static originURL: string = `https://firestore.googleapis.com/v1/projects/${environment.firebase.projectId}/databases/(default)/documents`;
    public static originProject: string = FirestoreService.originURL.split("https://firestore.googleapis.com/v1/")[1];
    private client: HttpClient;
    private readonly URL: string;

    protected constructor(database: string, client: HttpClient) {
        this.database = database;
        this.client = client;
        this.URL = `${FirestoreService.originURL}/${database}`
    }

    public create(partial: P): Observable<M> {
        return this.createRaw<P, M>(partial, this.database);
    }

    public createRaw<OverridePartial extends Model, OverrideModel extends Model>(partial: OverridePartial, overrideCollection: string): Observable<OverrideModel> {
        console.log(FirestoreAdapter.sanitizeValue(partial));
        return this.client.post<FirestoreDocument<OverrideModel>>(FirestoreService.originURL + "/" + overrideCollection, {fields: FirestoreAdapter.sanitizeValue(partial)}).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public get(id: string): Observable<M> {
        return this.getRaw(id, this.database);
    }

    public getRaw<OverrideModel extends Model>(id: string, overrideCollection: string): Observable<OverrideModel> {
        return this.client.get<FirestoreDocument<OverrideModel>>(FirestoreService.originURL + "/" + overrideCollection + '/' + id).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public query(query: any): Observable<M[]> {
        return this.queryRaw(query, this.database);
    }

    public queryRaw<OverrideModel extends Model>(query: any, overrideCollection?: string): Observable<OverrideModel[]> {
        return this.client.post<FirestoreQuery<M>[]>(
            FirestoreService.originURL + ':runQuery',
            {
                structuredQuery: {
                    ...query,
                    from: [{collectionId: overrideCollection}]
                }
            }).pipe(
            map(query => {
                return query.map(doc => FirestoreAdapter.transformDocument(doc.document));
            })
        );
    }

    public update(model: M): Observable<any> {
        return this.updateRaw<M>(model, this.database);
    }

    public updateRaw<OverrideModel extends Model>(model: M, overrideCollection?: string): Observable<any> {
        const composedUpdateURL = FirestoreService.originURL + "/" + overrideCollection + "/" + model.id + FirestoreAdapter.getUpdateMask(model);
        return this.client.patch<FirestoreDocument<M>>(composedUpdateURL, {fields: FirestoreAdapter.sanitizeValue(model)}).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public delete(id: string, overrideCollection?: string): Observable<boolean> {
        return this.client.delete<boolean>((overrideCollection ? FirestoreService.originURL + "/" + overrideCollection : this.URL) + '/' + id);
    }

    public deleteBulk(id: string[]): Observable<boolean> {
        return this.client.delete<boolean>(this.URL + '/' + id);
    }

    private beginTransaction(options?: any): Observable<any> {
        return this.client.post<any>(FirestoreService.originURL + ':beginTransaction', options);
    }

    public getDatabase(): string {
        return this.database;
    }

}
