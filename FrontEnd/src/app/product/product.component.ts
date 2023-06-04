import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private router : Router){

  }
  addpro(){
    this.router.navigate(['/addpro'])
  }

  getpro(){
    this.router.navigate(['/getpro'])
  }

  updatepro(){
    this.router.navigate(['/updatepro'])
  }

  deletepro(){
    this.router.navigate(['deletepro'])
  }

  searchbybrand(){
    this.router.navigate(['searchbybrand'])
  }
  searchbycat(){
    this.router.navigate(['searchbycat'])
  }searchbyproduct(){
    this.router.navigate(['searchbypro'])
  }

}
