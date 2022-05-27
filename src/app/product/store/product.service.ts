import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {PopulateService} from "../../core/service/populate.service";

@Injectable({providedIn: 'root'})
export class ProductService extends PopulateService<Product, Product> {
    constructor(private httpClient: HttpClient) {
        super('products', httpClient);
    }
}