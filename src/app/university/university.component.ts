import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UniversityService } from '../services/university.service';
import { ActivatedRoute } from '@angular/router';
import { universityModel } from '../model/university.model'


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  countryName!: string | null;
  countryDetail: Array<universityModel> = new Array();

  constructor(private universityService: UniversityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param => {
      this.countryName = param.get('country');
    });

    this.universityService.getUniversity(this.countryName).subscribe(Response => {
      for (let uni of Response as []) {

        this.countryDetail.push(uni)

      }
    })
  }
}
