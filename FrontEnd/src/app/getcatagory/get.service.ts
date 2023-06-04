import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface getdata{
    id:number,
    name:string
}

@Injectable({
  providedIn: 'root'
})

export class GetService {

  constructor(private http:HttpClient) { }
  // httpOptions={
  //   headers:new HttpHeaders({
  //     'Content-type':'application/json',
  //   })
  // }

  public getcategory():Observable<any>{
    return this.http.get<getdata[]>("https://localhost:7259/api/catagory/GetCatagories");
  }
}
