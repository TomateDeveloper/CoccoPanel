import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {MaterialFacade} from "./material.facade";
import {catchError, filter, Observable, of, switchMap, take, tap} from "rxjs";
import {Material} from "../store/material.model";

@Injectable()
export class MaterialEditPageGuard implements CanActivate {

    constructor(private materialFacade: MaterialFacade) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.getMaterials(id).pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private getMaterials(id: string) {
        return this.materialFacade.materials.pipe(
            tap(data => this.preFetch(data, id)),
            filter(data => !!data),
            take(1)
        );
    }

    private preFetch(material: Material[], id: string) {

        if (material.filter(material => material.id === id).length < 1) {
            this.materialFacade.loadId(id);
        }

        this.materialFacade.setActiveId(id);

    }


}