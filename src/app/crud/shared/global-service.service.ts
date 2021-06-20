import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
baseUrl:string = "https://typicode-api.herokuapp.com";
 // baseUrl:string = "https://angularpjt.herokuapp.com";
  // baseUrl:string = "https://new-json-api.herokuapp.com";
 // baseUrl:string = "https://testapi-one.herokuapp.com";
  option = { headers: new HttpHeaders().set("Content-type", "application/json") };
  constructor(private _http: HttpClient) { }

 // to handle httpResponce error
 formatErrors(error: HttpErrorResponse) {
  return throwError(error.message);
}
// ************     CRUD    *****************

 // add data into server database
 addData(path: string, body: object = {}) {
  const url = `${this.baseUrl}/${path}`;//meaning "http://localhost:3000/employee
  return this._http.post(url, body, this.option).pipe(catchError(this.formatErrors));
}
// get data from data base
getData(path:string):Observable<any[]>{
  return this._http.get<any[]>(`${this.baseUrl}/${path}`).pipe(catchError(this.formatErrors));}

 // delete data
 deleteData(path:string,id:number):Observable<any>{
  const url=`${this.baseUrl}/${path}/${id}`; //meaning "http://localhost:3000/employee/id"
  return this._http.delete<any>(url).pipe(catchError(this.formatErrors));}
//update data
  //  1st get single id
getSingleId(path:string,id:number): Observable<any>{
  const url = `${this.baseUrl}/${path}/${id}`;
  console.log(url);
  return this._http.get(url).pipe(catchError(this.formatErrors)); }
  //  2nd send updated data 
  updateData(path:string,body:object={},id:number){
    const url = `${this.baseUrl}/${path}/${id}`;
    return this._http.put(url,body,this.option).pipe(catchError(this.formatErrors))
  }
  // editData(path:string,Obj:any)
  //   {
  //     const url=`${this.baseUrl}/${path}/${Obj.id}`
  //     return this._http.put(url,Obj)
  //   }

// Sign In method to login user
SignIn(user:string){
  sessionStorage.setItem('user',user);
}
SignOut(){
  sessionStorage.removeItem('user');
}

}
