import {DatabaseReference, Model, Selectable} from "../../core/model/model.dto";
import {Material} from "../../material/store/material.model";

export interface Product extends Model, Selectable {
  name: string;
  reference: string;
  breakdownGroup: BreakdownGroup[];
  labors: ProductLabor[];
}

export interface BreakdownGroup {
  name: string;
  breakdowns: ProductBreakdown[];
}

export interface ProductBreakdown {
  area: number;
  mold: string;
  material: DatabaseReference | Material;
}

export interface ProductLabor {
  name: string;
  price: number;
}
