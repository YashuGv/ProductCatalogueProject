import { Component } from '@angular/core';
import { SearchcatService,product } from './searchcat.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-search-by-cat',
  templateUrl: './search-by-cat.component.html',
  styleUrls: ['./search-by-cat.component.css']
})
export class SearchByCatComponent {

  constructor(private searchbrand:SearchcatService,private router:Router,private fb:FormBuilder){}

  name !: string

  products : product[] = []

  searchbycat: FormGroup=this.fb.group({
    brand : ['',[Validators.required,Validators.minLength(1)]]
  })

  searchbycategory(){
    this.name=this.searchbycat.getRawValue().brand
    this.searchbrand.searchbycate(this.name).subscribe(data =>{
      this.products=data
      console.log(this.products)
    })
  }

}
