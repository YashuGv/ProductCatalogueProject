import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

export interface products{
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
export class GetproService {

  constructor(private http:HttpClient) { }
  public getpro():Observable<any>{
    return this.http.get<products[]>("https://localhost:7259/api/product/GetAllProducts");
  }
}
