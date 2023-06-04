import { Component } from '@angular/core';
import { DeleteproService } from './deletepro.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {

  constructor(private deleteprod:DeleteproService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    
  }

  Id !: Guid;

  deleteproduct: FormGroup=this.fb.group({
    id : ['',[Validators.required,Validators.minLength(1)]]
  })
  
  deletepro(){
    this.Id = this.deleteproduct.getRawValue().id
    this.deleteprod.deletepro(this.Id).subscribe((data: any)=>{
    if(data.status != 400 || data.status != 500){
      window.alert("Product Deleted Successfully");
      this.router.navigate(['/product']);
    }else{
      console.log("Something went wrong");
    }
    })
  }


}
