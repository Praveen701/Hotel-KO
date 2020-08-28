import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from '../app/menu/menu.component';
import { DishdetailComponent } from '../app/dishdetail/dishdetail.component';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { CommonModule } from '@angular/common';




const routes: Routes = [
  {path:'dishdetail/:id' ,component:DishdetailComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus',  component: AboutComponent },
  { path: 'contactus',  component: ContactComponent },
  { path: 'menu',     component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
