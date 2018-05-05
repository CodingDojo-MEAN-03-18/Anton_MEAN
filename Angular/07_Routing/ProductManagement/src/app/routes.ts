import { ProductListComponent } from './product-list/product-list.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const APP_ROUTES: Routes = [
    { path: '', component: ProductLandingComponent, pathMatch: 'full' },
    { path: 'Home', component: ProductLandingComponent, pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: NewProductComponent },
    { path: 'products/edit/:id', component: EditProductComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
