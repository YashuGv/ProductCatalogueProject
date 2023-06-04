import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetproService,products } from './getpro.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent {
  constructor(private router:Router,private get:GetproService){}
  data : products[] = []
  ngOnInit() {
    this.get.getpro().subscribe(res=>{
      this.data=res
      console.log(this.data)
    })
  }
}
