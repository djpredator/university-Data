import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// mat angular
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UniversityComponent } from './university/university.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    UniversityComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatInputModule, MatAutocompleteModule, MatCardModule, MatGridListModule,
  ]
})
export class AppModule { }
