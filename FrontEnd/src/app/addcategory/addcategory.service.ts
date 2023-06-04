import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

export interface category{
  name:String;
}

@Injectable({
  providedIn: 'root'
})
export class AddcategoryService {

  constructor(private http:HttpClient) { }

  add(cat:category){
    return this.http.post<category>("https://localhost:7259/api/catagory/AddCatagory",cat)
      .pipe(catchError(err => of('error',err)))
  }
}
