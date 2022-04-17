export interface Product {
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
