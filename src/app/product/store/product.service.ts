import {Injectable} from "@angular/core";
import {FirestoreService} from "../../core/service/firestore.service";
import {Material} from "../../material/store/material.model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductService extends FirestoreService<Material, Material> {
    constructor(private httpClient: HttpClient) {
        super('products', httpClient);
    }
}