import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {catchError, filter, Observable, of, switchMap, take, tap} from "rxjs";
import {ProductFacade} from "./product.facade";
import {Product} from "../store/product.model";

@Injectable()
export class ProductMainPageGuard implements CanActivate {

    constructor(private productFacade: ProductFacade) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.getMaterials(id).pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private getMaterials(id: string) {
        return this.productFacade.products.pipe(
            tap(data => this.preFetch(data, id)),
            filter(data => !!data),
            take(1)
        );
    }

    private preFetch(material: Product[], id: string) {

        if (material.filter(material => material.id === id).length < 1) {
            this.productFacade.loadId(id);
        }

        this.productFacade.setActiveId(id);

    }

}