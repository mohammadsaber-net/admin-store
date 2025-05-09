import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './product/products/products.component';
import { CartsComponent } from './cart/carts/carts.component';
// import { authGuard, gaurdGuard } from './gaurd.guard';
import { NavbarComponent } from './head/navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard, gaurdGuard } from './guard.guard';

export const routes: Routes = [
    {
        path: '', canActivate: [gaurdGuard], component: NavbarComponent, children: [
            { path: "", component: ProductsComponent },
            { path: "products", component: ProductsComponent },
            { path: "carts", component: CartsComponent },
        ]
    },
    { path: "login", canActivate: [authGuard], component: LoginComponent },
    { path: "**", component: NotfoundComponent }
];

