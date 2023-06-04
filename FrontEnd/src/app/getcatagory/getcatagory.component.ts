import { Component,OnInit } from '@angular/core';
import { GetService,getdata } from './get.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-getcatagory',
  templateUrl: './getcatagory.component.html',
  styleUrls: ['./getcatagory.component.css']
})
export class GetcatagoryComponent implements OnInit {
  constructor(private router:Router,private get:GetService){}
  data : getdata[] = []
  ngOnInit() {
    this.get.getcategory().subscribe(res=>{
      this.data=res
      console.log(this.data)
    })
  }
}
