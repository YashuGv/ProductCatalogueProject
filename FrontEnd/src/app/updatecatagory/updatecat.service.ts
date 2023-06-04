import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

export interface category{
  name:String;
}

@Injectable({
  providedIn: 'root'
})
export class UpdatecatService {

  constructor(private http:HttpClient) { }
  update(id:Number,data:category){
    return this.http.put<category>(`https://localhost:7259/api/catagory/ModifyCatagory/${id}`,data)
    .pipe(catchError(err=> of('error',err)))
  }
}
