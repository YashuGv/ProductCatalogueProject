import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { GetcatagoryComponent } from './getcatagory/getcatagory.component';
import { UpdatecatagoryComponent } from './updatecatagory/updatecatagory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { SearchByCatComponent } from './search-by-cat/search-by-cat.component';
import { SearchByBrandComponent } from './search-by-brand/search-by-brand.component';
import { SearchbyproductComponent } from './searchbyproduct/searchbyproduct.component';

const routes: Routes = [
  {
    path:'', component:WelcomeComponent
  },{
    path:'addcat',component:AddcategoryComponent
  },{
    path:'getcat',component:GetcatagoryComponent
  },{
    path:'updatecat',component:UpdatecatagoryComponent
  },{
    path:'deletecat',component:DeletecategoryComponent
  },{
    path:'getpro',component:GetproductComponent
  },{
    path:'product',component:ProductComponent
  },
  {
    path:'addpro',component:AddproductComponent
  },{
    path:'updatepro',component:UpdateproductComponent
  },{
    path:'deletepro',component:DeleteproductComponent
  },{
    path:'searchbycat',component:SearchByCatComponent
  },{
    path:'searchbybrand',component:SearchByBrandComponent
  },{
    path:'searchbypro',component:SearchbyproductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
