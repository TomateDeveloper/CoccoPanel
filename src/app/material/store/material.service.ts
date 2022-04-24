import {Injectable} from "@angular/core";
import {Material} from "./material.model";
import {FirestoreService} from "../../core/service/firestore.service";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class MaterialService extends FirestoreService<Material, Material>{
    constructor(private httpClient: HttpClient) {
        super('materials', httpClient);
    }
}