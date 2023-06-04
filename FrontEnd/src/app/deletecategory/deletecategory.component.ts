import { Component } from '@angular/core';
import { DeletecatService } from './deletecat.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent {

  constructor(private deletecategory:DeletecatService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }

  Id !: string;

  deletecatagory: FormGroup=this.fb.group({
    name : ['',[Validators.required,Validators.minLength(1)]]
  })
  
  deletecat(){
    this.Id = this.deletecatagory.getRawValue().name
    this.deletecategory.deletecat(this.Id).subscribe((data: any)=>{
    if(data.status == 200){
      window.alert("Category Deleted Successfully");
      this.router.navigate(['']);
    }else{
      console.log("Something went wrong");
    }
    })
  }

}
