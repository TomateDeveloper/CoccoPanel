import {Model} from "../model/model.dto";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FirestoreAdapter} from "../../shared/model/FirestoreAdapter";
import {FirestoreDocument, FirestoreQuery} from "../../shared/model/FirestoreDocument";

export abstract class FirestoreService<P extends Model, M extends Model> {

    private database: string;
    private originURL: string = `https://firestore.googleapis.com/v1/projects/${environment.firebase.projectId}/databases/(default)/documents`;
    private client: HttpClient;
    private readonly URL: string;

    protected constructor(database: string, client: HttpClient) {
        this.database = database;
        this.client = client;
        this.URL = `${this.originURL}/${database}`
    }

    public create(partial: P): Observable<M> {
        return this.client.post<FirestoreDocument<M>>(this.URL, {fields: FirestoreAdapter.sanitizeValue(partial)}).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public get(id: string): Observable<M> {
        return this.client.get<FirestoreDocument<M>>(this.URL + '/' + id).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public query(query: any): Observable<M[]> {
        return this.client.post<FirestoreQuery<M>[]>(
            this.originURL + ':runQuery',
            {
                structuredQuery: {
                    ...query,
                    from: [{collectionId: this.database}]
                }
            }).pipe(
            map(query => {
                return query.map(doc => FirestoreAdapter.transformDocument(doc.document));
            })
        );
    }

    public update(model: M): Observable<any> {
        return this.client.patch<FirestoreDocument<M>>(this.URL + model.id, model).pipe(
            map(document => FirestoreAdapter.transformDocument(document))
        );
    }

    public delete(id: string): Observable<boolean> {
        return this.client.delete<boolean>(this.URL + '/' + id);
    }

}
