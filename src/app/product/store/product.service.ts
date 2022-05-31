import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {FirestoreService} from "../../core/service/firestore.service";

@Injectable({providedIn: 'root'})
export class ProductService extends FirestoreService<Product, Product> {
    constructor(private httpClient: HttpClient) {
        super('products', httpClient);
    }
}