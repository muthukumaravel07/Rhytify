import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../loginService/login.service';

export interface Project {
  value: string;
}
export interface Proj {
  Id: string;
  CompanyId: string;
  Order: number;
  Name: string;
}

@Component(
  {
    selector: 'app-page2',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  }
)
export class MenuComponent implements OnInit {
  projects: Project[] = [
    { value: 'RhytifyServiceeAPI' },
    { value: 'Rhytify' }
  ];
  UserName: string;
  CompLoc: string;
  proj: Proj[];
  /* first: boolean; */

  constructor(private cookie: CookieService, private data: LoginService) { }

  ngOnInit() { 
    this.UserName= this.cookie.get('username'); 
    this.CompLoc= this.cookie.get('companyID');
    this.data.getCompanies().subscribe(
      data => {
        this.proj = data["Projects"];
      }
    )

  }

}
