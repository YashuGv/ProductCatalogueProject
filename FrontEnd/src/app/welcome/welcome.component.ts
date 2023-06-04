import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router : Router){

  }
  addcat(){
    this.router.navigate(['/addcat'])
  }

  getcat(){
    this.router.navigate(['/getcat'])
  }

  updateca(){
    this.router.navigate(['/updatecat'])
  }

  deletecate(){
    this.router.navigate(['deletecat'])
  }

  product(){
    this.router.navigate(['/product'])
  }

}
