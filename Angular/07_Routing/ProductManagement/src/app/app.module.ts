import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './routes';

import { AppComponent } from './app.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { DataService } from './data.service';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductLandingComponent,
    ProductListComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
