import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Product} from "../store/product.model";
import {getProducts} from "../store/product.selector";
import {get, list, setActive} from "../store/product.actions";
import {ProductService} from "../store/product.service";
import {MaterialService} from "../../material/store/material.service";
import {PopulationAdapter} from "../../shared/model/PopulationAdapter";
import {Material} from "../../material/store/material.model";
import {PopulatedReferences} from "../../core/model/model.dto";
import {FirestoreService} from "../../core/service/firestore.service";


@Injectable({
    providedIn: 'root'
})
export class ProductFacade {

    readonly products: Observable<Product[]>;

    constructor(private store: Store<AppState>, private materialService: MaterialService) {
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

    public populateMaterial(product: Product): Observable<Product> {

        const databaseCollection = "materials";
        const references = PopulationAdapter.getPopulateRegistry(product);


        if (!references.some(ref => ref.databaseCollection === databaseCollection)) {
            return of(product);
        }

        const materials: Observable<PopulatedReferences> =
            this.materialService.query(PopulationAdapter.generateRawQuery(references[0], FirestoreService.originProject))
                .pipe(map(references => {
                    return ({objects: references, databaseCollection} as PopulatedReferences);
                }));

        return materials.pipe(
            map(populatedReferences => PopulationAdapter.replaceModelReferences(product, [populatedReferences]))
        );

    }

}