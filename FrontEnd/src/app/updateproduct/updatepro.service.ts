import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Guid } from 'guid-typescript';


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
export class UpdateproService {

  constructor(private http:HttpClient) { }
  update(ide: Guid ,data:product){
    return this.http.put<product>(`https://localhost:7259/api/product/ModifyProduct/${ide}`,data)
    .pipe(catchError(err=> of('error',err)))
  }
}
