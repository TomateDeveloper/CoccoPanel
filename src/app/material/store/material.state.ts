import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Material} from "./material.model";

export interface MaterialState extends EntityState<Material> {
    selectedMaterialId: string | null;
}

export function selectMaterialId(material: Material) {
    return material.id;
}

export const adapter: EntityAdapter<Material> = createEntityAdapter<Material>({
        selectId: selectMaterialId
});