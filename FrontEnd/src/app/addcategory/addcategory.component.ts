import { Component,OnInit } from '@angular/core';
import { AddcategoryService,category } from './addcategory.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  constructor(private addcategory:AddcategoryService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }
  addcatagory: FormGroup=this.fb.group({
    name : ['',[Validators.required]]
  })
  
  newcat !: category
  add(){
    let newcat : category = {
      name: this.addcatagory.getRawValue().name
    }
    this.addcategory.add(newcat).subscribe((data: any)=>{
    if(data.status != 400 || data.status!=500){
      window.alert("Category Added Successfully");
      this.router.navigate(['']);
    }else{
      console.log("Something went wrong");
    }
    })
  }
}
