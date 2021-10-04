import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { UniversityComponent } from './university/university.component';
const routes: Routes = [
  {path:'countries', component:CountriesListComponent},
  {path: 'university/:country', component:UniversityComponent},
  {path: '', redirectTo: 'countries', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
