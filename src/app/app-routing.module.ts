import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'Home' ,component: HomeComponent},
  { path: 'Header' ,component: HeaderComponent},
  { path: 'Products', component: ProductsComponent ,
  children:[
  { path: 'productWithDiscount' , component:ProductWithDiscountComponent},
  { path: 'productWithoutDiscount' , component:ProductWithoutDiscountComponent}
]},
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
  { path: 'comment/:id', component: CommentComponent},
  { path: 'registerForm', component: RegisterFormComponent},
  { path: 'loginForm' , component:LoginFormComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
