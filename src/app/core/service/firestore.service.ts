import {Model} from "../model/model.dto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {sanitizeIdentifier} from "@angular/compiler";

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
        return this.client.post<M>(this.URL, {fields: FirestoreService.sanitizeValue(partial)});
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

    public static sanitizeValue<T>(item: T): any {

        let sanitized: any = {};

        Object.entries(item).map(i => {

            switch (typeof i[1]) {
                case "string": {
                    sanitized[i[0]] = {
                        stringValue: i[1]
                    };
                    break;
                }
                case "number": {
                    sanitized[i[0]] = {
                        numberValue: i[1]
                    };
                    break;
                }
                case "boolean": {
                    sanitized[i[0]] = {
                        booleanValue: i[1]
                    }
                    break;
                }
                case "object": {
                    sanitized[i[0]] = this.sanitizeValue(i[1]);
                    break;
                }
                default: {
                    throw new Error("Not serializable data provided");
                }
            }

        });

        console.log(sanitized);

        return sanitized;

    }

}
