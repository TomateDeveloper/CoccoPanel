import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Material} from "./material.model";
import {Selectable} from "../../core/model/model.dto";

export interface MaterialState extends EntityState<Material & Selectable> {
    activeMaterialId: string | null;
}

export function selectMaterialId(material: Material) {
    return material.id;
}

export const materialAdapter: EntityAdapter<Material> = createEntityAdapter<Material>({
    selectId: selectMaterialId
});