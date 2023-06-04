import { Component } from '@angular/core';
import { SearchbrandService,product } from '../search-by-brand/searchbrand.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-searchbyproduct',
  templateUrl: './searchbyproduct.component.html',
  styleUrls: ['./searchbyproduct.component.css']
})
export class SearchbyproductComponent {

  constructor(private searchbrand:SearchbrandService,private router:Router,private fb:FormBuilder){}

  name !: string

  products : product[] = []

  searchbypro: FormGroup=this.fb.group({
    brand : ['',[Validators.required,Validators.minLength(1)]]
  })

  searchbyproduct(){
    this.name=this.searchbypro.getRawValue().brand
    this.searchbrand.searchbypro(this.name).subscribe(data =>{
      this.products=data
      console.log(this.products)
    })
  }
  

}
