import { Component } from '@angular/core';
import { AddproductService,product } from './addproduct.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private addpro:AddproductService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }
  addproduct: FormGroup=this.fb.group({
    productName : ['',[Validators.required]],
    brand : ['',[Validators.required,Validators.minLength(1)]],
    price : ['',[Validators.required,Validators.minLength(1)]],
    productDescription:['',[Validators.required,Validators.minLength(5)]],
    categoryId:['',Validators.required,Validators.minLength(1)]

  })
  
  newpro !: product
  add(){
    let newpro : product = {
      productName: this.addproduct.getRawValue().productName,
      brand : this.addproduct.getRawValue().brand,
      price : this.addproduct.getRawValue().price,
      productDescription : this.addproduct.getRawValue().productDescription,
      categoryId : this.addproduct.getRawValue().categoryId
    }
    this.addpro.add(newpro).subscribe((data: any)=>{
    if(data.status != 400 || data.status!=500){
      window.alert("Product Added Successfully");
      this.router.navigate(['/product']);
    }else{
      console.log("Something went wrong");
    }
    })
  }

}
