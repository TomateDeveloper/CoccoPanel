import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Product} from "../store/product.model";
import {getProducts} from "../store/product.selector";
import {get, list, setActive} from "../store/product.actions";


@Injectable({
    providedIn: 'root'
})
export class ProductFacade {

    readonly products: Observable<Product[]>;

    constructor(private store: Store<AppState>) {
        this.products = store.pipe(select(getProducts));
    }

    load(query?: any): void {
        this.store.dispatch(list({query}));
    }

    setActiveId(id: string): void {
        this.store.dispatch(setActive({id}));
    }

    loadId(id: string): void {
        this.store.dispatch(get({id}));
    }

    public getRequiredMaterials(): void

}