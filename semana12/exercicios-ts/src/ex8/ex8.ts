import { RestaurantManagerInterface, Product, SoldProduct } from './ex8.types';

class RestaurantManager implements RestaurantManagerInterface {
  private readonly products: Product[];
  private readonly sold: SoldProduct[]; //Acessíveis apenas pelos metodos get e set e não-reassignáveis

  constructor(initialArrayOfProducts: Product[]) {
    this.products = initialArrayOfProducts;
    this.sold = [];
  }

  addNewProduct(product: Product) {
    this.products.push(product);
  }

  seePriceOfProductInList(productName: string) {
    const index = this.products.findIndex(
      (product) => product.name === productName
    );

    return index > -1
      ? this.products[index].sellPrice
      : 'Produto não encontrado';
  }

  sellProducts(productName: string) {
    const index = this.products.findIndex(
      (product) => product.name === productName
    );
    this.sold.push({ ...this.products[index], sellTime: Date.now() });
  }

  get restaurantProfit() {
    return (
      this.sold.reduce((previous, current) => previous + current.sellPrice, 0) -
      this.products.reduce((previous, current) => previous + current.cost, 0)
    );
  }

  get seeAllProducts() {
    return this.products;
  }
  get seeAllSoldProducts() {
    return this.sold;
  }
}

export default RestaurantManager;
