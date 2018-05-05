import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  curent_product: Product;
  title = '';
  price = 0;
  imgUrl = '';

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) {
      this._route.paramMap.subscribe(params => {
      this.curent_product = this._dataService.getProduct(parseInt(params.get('id'), 10));
      this.title = this.curent_product.title;
      this.price = this.curent_product.price;
      this.imgUrl = this.curent_product.imgUrl;
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._dataService.deleteItem(this.curent_product);
    this.router.navigate(['products']);
  }

  onEdit() {
    this._dataService.editItem(this.curent_product, this.title, this.price, this.imgUrl);
    this.router.navigate(['products']);
  }

}
