import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

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
export class SearchbrandService {

  constructor(private http:HttpClient) { }

  searchbybrand(name:string): Observable<any>{
    return this.http.get<product[]>(`https://localhost:7259/api/product/GetByBrand/${name}`);
  }

  searchbypro(name:string):Observable<any>{
    return this.http.get<product[]>(`https://localhost:7259/api/product/GetByProductname/${name}`);
  }
}
