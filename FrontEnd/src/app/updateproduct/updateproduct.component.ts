import { Component } from '@angular/core';
import { UpdateproService,product } from './updatepro.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {

  constructor(private updateproduc:UpdateproService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }

  proId !:Guid;

  updatepro: FormGroup=this.fb.group({
    proid:['',[Validators.required]],
    productName : ['',[Validators.required]],
    brand : ['',[Validators.required,Validators.minLength(1)]],
    price : ['',[Validators.required,Validators.minLength(1)]],
    productDescription:['',[Validators.required,Validators.minLength(5)]],
    categoryId:['',Validators.required,Validators.minLength(1)]
  })
  
  newcat !: product
  update(){
    let newpro : product = {
      productName: this.updatepro.getRawValue().productName,
      brand : this.updatepro.getRawValue().brand,
      price : this.updatepro.getRawValue().price,
      productDescription : this.updatepro.getRawValue().productDescription,
      categoryId : this.updatepro.getRawValue().categoryId
    }
    this.proId = this.updatepro.getRawValue().proid
    this.updateproduc.update(this.proId,newpro).subscribe((data: any)=>{
    if(data.status != 400 || data.status != 500){
      window.alert("product Updated Successfully");
      this.router.navigate(['/product']);
    }else{
      console.log("Something went wrong");
    }
    })
  }
}
