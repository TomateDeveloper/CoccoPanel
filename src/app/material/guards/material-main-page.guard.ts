import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {catchError, filter, Observable, of, switchMap, take, tap} from "rxjs";
import {MaterialFacade} from "./material.facade";
import {Material} from "../store/material.model";

@Injectable()
export class MaterialMainPageGuard implements CanActivate {

    constructor(private materialFacade: MaterialFacade) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.getMaterials().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private getMaterials() {
        return this.materialFacade.materials.pipe(
            tap(data => this.preFetch(data)),
            filter(data => !!data),
            take(1)
        );
    }

    private preFetch(material: Material[]) {
        if (material.length < 1) {
            this.materialFacade.load();
        }
    }


}