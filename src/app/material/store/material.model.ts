import {Model} from "../../core/model/model.dto";

export interface Material extends Model {
  name: string;
  measure: number;
  price: number;
}
