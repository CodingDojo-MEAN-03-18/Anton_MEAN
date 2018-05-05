import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class DataService {
  products: Array<Product> = [];
  constructor() { }

  addItem(title, price, imgUrl) {
    const number = Math.floor(Math.random() * 9999) + 1;
    const pruduct = new Product(number, title, price, imgUrl);
    this.products.push(pruduct);
  }

  editItem(product: Product, newName, newPrice, newURL) {
    const id = this.products.indexOf(product);
        this.products[id]['title'] = newName;
        this.products[id]['price'] = newPrice;
        // this.products[id]['imgUrl'] = newURL;
        product['imgUrl'] = newURL;
  }

  deleteItem(product: Product) {
   const id = this.products.indexOf(product);
   this.products.splice(id, 1);
  }

  getProduct(id) {
    for (const product of this.products) {
      if (id === product.id) { return product; }
    }
  }

}
