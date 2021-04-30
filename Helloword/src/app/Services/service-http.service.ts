import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from 'src/models/Students';
@Injectable({
  providedIn: 'root'
})



export class ServiceHttpService {
    private REST_API_SERVER = 'http://localhost:3000';


    constructor(private httpClient: HttpClient){}

    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //Authorization: 'my-auth-token'
      })
    };

    public getStudents(): Observable<any>{
      const url = `${this.REST_API_SERVER}/students`;
      return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
    }
    public addStudents(data: Student): Observable<any>{
      const url = `${this.REST_API_SERVER}/students`;
      return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
    }
    public getProfile(): Observable<any>{
      const url = `${this.REST_API_SERVER}/profile`;
      return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
    }

    public getComments(): Observable<any>{
      const url = `${this.REST_API_SERVER}/comments`;
      return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
    }
    public getPosts(): Observable<any>{
      const url = `${this.REST_API_SERVER}/posts`;
      return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
    }    
    public addPosts(data:any){
      const url = `${this.REST_API_SERVER}/posts`;
      return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
    } 

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }


  
}



function handleError(error:  HttpErrorResponse) {
  throw new Error('Function not implemented.');
}
