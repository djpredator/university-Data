import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryModel } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://cors-anywhere.herokuapp.com/https://api.first.org/data/v1/countries'
  constructor(private httpclient: HttpClient) { }
  getCountries() {

    return this.httpclient.get<countryModel>(this.url)


  }
}
