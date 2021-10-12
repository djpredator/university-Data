import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  universityURL = 'http://universities.hipolabs.com/search?country='
  constructor(private httpclient: HttpClient) {
  }
  getUniversity(pass: string | null) {
    return this.httpclient.get(this.universityURL + pass)
  }
}
