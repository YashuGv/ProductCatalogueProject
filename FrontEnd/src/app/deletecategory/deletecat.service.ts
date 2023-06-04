import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletecatService {

  constructor(private http:HttpClient) { }
  deletecat(name:string){
    return this.http.delete(`https://localhost:7259/api/catagory/RemoveCatagory/${name}`)
    .pipe(catchError(err=> of('error',err)))
  }
}
