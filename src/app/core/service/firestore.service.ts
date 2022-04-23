import {Model} from "../model/model.dto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export abstract class FirestoreService<P extends Model, M extends Model> {

    private database: string;
    private client: HttpClient;
    private readonly URL: string;

    protected constructor(database: string, client: HttpClient) {
        this.database = database;
        this.client = client;
        this.URL = `https://firestore.googleapis.com/v1/projects/
        ${environment.firebase.projectId}/databases/(default)/documents/${database}`
    }

    public create(partial: P): Observable<M> {
        return this.client.post<M>(this.URL, partial);
    }

    public get(id: string): Observable<M> {
        return this.client.get<M>(this.URL + '/' + id);
    }

    public update(model: M): Observable<any> {
        return this.client.patch<M>(this.URL + '/' + model.id, model);
    }

    public delete(id: string): Observable<boolean> {
        return this.client.delete<boolean>(this.URL + '/' + id);
    }

}
