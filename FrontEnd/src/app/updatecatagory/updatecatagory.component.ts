import { Component } from '@angular/core';
import { UpdatecatService,category } from './updatecat.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatecatagory',
  templateUrl: './updatecatagory.component.html',
  styleUrls: ['./updatecatagory.component.css']
})
export class UpdatecatagoryComponent {
  constructor(private updatecategory:UpdatecatService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }

  Id !: number;

  updatecatagory: FormGroup=this.fb.group({
    id : ['',[Validators.required,Validators.pattern("^[0-9]+$")]],
    name : ['',[Validators.required,Validators.minLength(1)]]
  })
  
  newcat !: category
  update(){
    let newcat : category = {
      name: this.updatecatagory.getRawValue().name
    }
    this.Id = this.updatecatagory.getRawValue().id
    this.updatecategory.update(this.Id,newcat).subscribe((data: any)=>{
    if(data.status != 400 || data.status != 500){
      window.alert("Category Updated Successfully");
      this.router.navigate(['']);
    }else{
      console.log("Something went wrong");
    }
    })
  }
}
