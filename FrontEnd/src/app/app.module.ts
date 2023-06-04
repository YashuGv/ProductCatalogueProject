import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { GetcatagoryComponent } from './getcatagory/getcatagory.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdatecatagoryComponent } from './updatecatagory/updatecatagory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { SearchByBrandComponent } from './search-by-brand/search-by-brand.component';
import { SearchByCatComponent } from './search-by-cat/search-by-cat.component';
import { SearchbyproductComponent } from './searchbyproduct/searchbyproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddcategoryComponent,
    GetcatagoryComponent,
    UpdatecatagoryComponent,
    DeletecategoryComponent,
    GetproductComponent,
    ProductComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    SearchByBrandComponent,
    SearchByCatComponent,
    SearchbyproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
