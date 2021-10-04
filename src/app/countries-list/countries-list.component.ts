import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DatasharingService } from '../services/datasharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  control = new FormControl();
 countriesFilter: Observable<string[]> | undefined;
 selectedcountry:string ='';

  dataofAPI: Array<any> = new Array();
  countries: Array<any> = new Array();
  countryData!: any;
  values?: string;
  constructor(private countryservice: CountryService, private datasharingservice:DatasharingService, private router:Router) { }

  ngOnInit(): void {

   this.countriesFilter=this.control.valueChanges.pipe(
     startWith(' '),
     map (value=>this._filter(value))
   );


    this.countryservice.getCountries().subscribe(message => {
      console.log("All data of API", message)
      this.countryData = message;
      // console.log(this.countryData['data']['IN']['country'])
      for ([this.values] of Object.entries(this.countryData['data'])) {
        console.log(this.values)
        console.log(this.countryData['data'][`${this.values}`]['country'])
        this.countries.push(this.countryData['data'][`${this.values}`]['country'])
      }
      console.log("List of Countries", this.countries)
      // this.dataofAPI.push(message)

      // for (let i of this.dataofAPI) {
      //   console.log("List of Country Code",i.data)
      //     this.countries.push(i.data)

      // }

      // console.log(this.countries.)
      // })

    })
  }

  private _filter(value: any): any[] {
    const filterValue = this._normalizeValue(value);
    return this.countries.filter(countries => this._normalizeValue(countries).includes(filterValue));
  }

  private _normalizeValue(value: any): any {
    return value.toLowerCase().replace(/\s/g, '');
  }


  selectChangeCountry(event: { target: any; }){
    console.log(this.control.value)
    this.selectedcountry= this.control.value
    console.log("Selected Country:- ",this.selectedcountry)
    this.datasharingservice.sendCountry(this.selectedcountry)
    this.router.navigate(['university',this.selectedcountry])
  }

  
 
}