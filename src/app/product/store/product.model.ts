import {Model, Selectable} from "../../core/model/model.dto";

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
  material: string;
}

export interface ProductLabor {
  name: string;
  price: number;
}
