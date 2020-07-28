export interface Product {
  name: string;
  cost: number;
  sellPrice: number;
  ingredients: string[];
}

export interface SoldProduct extends Product {
  sellTime: number;
}

export interface RestaurantManagerInterface {
  addNewProduct: (productName: Product) => void;
  seePriceOfProductInList: (productName: string) => number | string;
  sellProducts: (productName: string) => void;
  restaurantProfit: number; //getters e setters são tipados como se fossem variáveis - lembrar disso
  seeAllProducts: Product[];
  seeAllSoldProducts: SoldProduct[];
}
