// Manufacturer Typing
export interface Manufacturer {
  name: string;
  materials: string[];
  productTypes: ProductTypes[];
}

export interface ProductTypes {
  name: string;
  wings: Wings[];
}

export interface Wings {
  name: string;
  opening: string[];
}
// Item Typing
export interface Item {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}
