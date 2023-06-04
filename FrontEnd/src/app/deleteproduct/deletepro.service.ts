import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,of } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DeleteproService {

  constructor(private http:HttpClient) { }
  deletepro(id:Guid){
    return this.http.delete(`https://localhost:7259/api/product/RemoveProduct/${id}`)
    .pipe(catchError(err=> of('error',err)))
  }
}
