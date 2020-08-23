import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRestService {

  private readonly URL = 'http://127.0.0.1:8080/submitForm';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  postItems(jsonString : String){

    this.http.post(this.URL,jsonString).subscribe(
      data  => { console.log("POST Request is successful ", data);},
      error  => {console.log("Error", error);}
    );
  }


}
