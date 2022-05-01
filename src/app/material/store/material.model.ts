import {Model, Selectable} from "../../core/model/model.dto";

export interface Material extends Model, Selectable {
  name: string;
  measurable: boolean;
  length: number;
  price: number;
}
