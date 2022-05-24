import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Selectable} from "../../core/model/model.dto";
import {Product} from "./product.model";

export interface ProductState extends EntityState<Product & Selectable> {
    activeMaterialId: string | null;
}

export function selectProductId(product: Product) {
    return product.id;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: selectProductId
});