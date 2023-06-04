import { Component } from '@angular/core';
import { SearchbrandService,product } from './searchbrand.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-search-by-brand',
  templateUrl: './search-by-brand.component.html',
  styleUrls: ['./search-by-brand.component.css']
})
export class SearchByBrandComponent {
  constructor(private searchbrand:SearchbrandService,private router:Router,private fb:FormBuilder){}

  name !: string

  products : product[] = []

  searchbyb: FormGroup=this.fb.group({
    brand : ['',[Validators.required,Validators.minLength(1)]]
  })

  searchbybrand(){
    this.name=this.searchbyb.getRawValue().brand
    this.searchbrand.searchbybrand(this.name).subscribe(data =>{
      this.products=data
      console.log(this.products)
    })
  }
  

}
