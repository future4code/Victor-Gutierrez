export enum Clothes {
  VERAO = 'Roupas de Verão',
  INVERNO = 'Roupas de Inverno',
  BANHO = 'Roupas de Banho',
  INTIMAS = 'Roupas Íntimas',
}

export enum ClothesBasedDiscount {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMAS = 0.07,
}

interface Product {
  name: string;
  price: number;
  collection: Clothes;
}

interface ProductInSale extends Product {
  salesPrice: number;
  discount: string;
}

export type CalculateSalesPriceType = (
  productInventory: Product[]
) => ProductInSale[];
