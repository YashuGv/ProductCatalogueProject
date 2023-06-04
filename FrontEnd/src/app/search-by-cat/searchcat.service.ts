import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface product{
  name: string,
  productId: Guid,
  productName: string,
  productDescription: string,
  brand: string,
  price: number,
  categoryId: number
}

@Injectable({
  providedIn: 'root'
})
export class SearchcatService {

  constructor(private http:HttpClient) { }

  searchbycate(name:string): Observable<any>{
    return this.http.get<product[]>(`https://localhost:7259/api/catagory/GetByCatagoryName/${name}`);
  }
}
