import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {catchError, filter, Observable, of, switchMap, take, tap} from "rxjs";
import {ProductFacade} from "./product.facade";
import {Product} from "../store/product.model";

@Injectable()
export class ProductMainPageGuard implements CanActivate {

    constructor(private productFacade: ProductFacade) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.getProducts().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private getProducts() {
        return this.productFacade.products.pipe(
            tap(data => this.preFetch(data)),
            filter(data => !!data),
            take(1)
        );
    }

    private preFetch(material: Product[]) {
        if (material.length < 1) {
            this.productFacade.load();
        }
    }

}