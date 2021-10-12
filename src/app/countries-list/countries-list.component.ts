import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { countryModel, Data } from '../model/country.model';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  control = new FormControl();
  countriesFilter!: Observable<countryModel>;
  selectedcountry: string = '';
  options = ["India", "Nepal"];

  countries: Array<countryModel> = new Array();
  countryData: Array<countryModel> = new Array();
  values?: string;
  formGroup!: FormGroup;
  constructor(private countryservice: CountryService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.initForm()
    this.fetchCountry()
  }

  initForm() {
    this.formGroup = this.fb.group({
      'country': ['']
    })
    this.formGroup.get('country')?.valueChanges.subscribe(response => {
      this.filterData(response);
    })
  }
  filterData(enteredData: string) {
    this.options = this.options.filter(item => {
      return item.toLowerCase().includes(enteredData)
    })
  }

  fetchCountry() {
    this.countryservice.getCountries().subscribe((message: countryModel) => {
      this.countryData.push(message);
      for (let eachCountryCode of this.countryData) {
        for (let country of Object.entries(eachCountryCode.data).map(([name, values]) => ({ name, values }))) {
          this.countries.push(country.values.country)
          this.options.push(country.values.country)
        }
      }
    })
  }
  selectChangeCountry(event: { target: countryModel }) {
    this.selectedcountry = this.control.value
    this.router.navigate(['university', this.selectedcountry])
  }



}