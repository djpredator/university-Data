import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../services/datasharing.service';
import { Subscription } from 'rxjs';
import { UniversityService } from '../services/university.service';
import { ActivatedRoute } from '@angular/router';
import {universityModel} from '../model/university.model'


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  countryName: any | undefined;
  countryDetail:Array<any>=new Array;
  universityData:Array<any>=new Array;
  constructor(private datasharingservice: DatasharingService , private universityService: UniversityService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param => {
      this.countryName = param.get('country');
    });

this.universityService.getUniversity(this.countryName).subscribe(Response=>{
  console.log("country Details", Response)
  this.countryDetail.push(Response);
  console.log("University",this.countryDetail)

  
  for (let uni of this.countryDetail) {
    console.log("Colleges",uni[0].name)
    
  }
})


}
}


// this.countryName