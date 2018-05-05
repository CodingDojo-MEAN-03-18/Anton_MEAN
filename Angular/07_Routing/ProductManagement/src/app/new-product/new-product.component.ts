import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _dataService: DataService, private router: Router) { }
  title = '';
  price = 0;
  imgUrl = '';

  ngOnInit() {
  }

  onCreate() {
    this._dataService.addItem(this.title, this.price, this.imgUrl);
    this.router.navigate(['/products']);
  }

}
