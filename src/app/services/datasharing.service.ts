import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor(private http:HttpClient) { }



public subject = new Subject<any>();

  sendCountry(message:any){
    this.subject.next(message);
  }
  
  getCountry(): Observable<any>{
    return this.subject.asObservable();
  }
}
