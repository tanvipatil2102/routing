import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { NoPageFoundComponent } from "./shared/components/no-page-found/no-page-found.component";
import { UserComponent } from "./shared/components/user/user.component";
import { UserFormComponent } from "./shared/components/user-form/user-form.component";
import { ProductComponent } from "./shared/components/product/product.component";
import { ProductFormComponent } from "./shared/components/product-form/product-form.component";



const appRoutes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'users',
        component : UsersComponent
    },
    {
        path : 'users/addUser',
        component : UserFormComponent
    },
    {
        path : 'users/:userId',
        component : UserComponent
    },
    {
        path : 'users/:userId/editUser',
        component : UserFormComponent
    },
    {
        path : 'products/addProduct',
        component : ProductFormComponent
    },
    {
        path : 'products/:pId',
        component : ProductComponent
    },
    {
        path :'products/:pId/editProduct',
        component :ProductFormComponent
    },
    {
        path : "**",
        component : NoPageFoundComponent
    }
]


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}