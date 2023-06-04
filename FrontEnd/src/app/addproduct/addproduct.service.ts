import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';


export interface product{
  productName: string,
  productDescription: string,
  brand: string,
  price: number,
  categoryId: number
}

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http:HttpClient) { }

  add(cat:product){
    return this.http.post<product>("https://localhost:7259/api/product/AddProduct",cat)
      .pipe(catchError(err => of('error',err)))
  }
}
