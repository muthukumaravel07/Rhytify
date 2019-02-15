import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../loginService/login.service';
import { Router } from "@angular/router";

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
  pro: string;
  proj: Proj[];
  /* first: boolean; */

  constructor(private cookie: CookieService, private data: LoginService, private router: Router) { }

  ngOnInit() { 
    this.UserName= this.cookie.get('username'); 
    this.CompLoc= this.cookie.get('companyID');
    this.pro= this.cookie.get('project');
    this.data.getCompanies().subscribe(
      data => {
        this.proj = data["Projects"];
      }
    )

  }
  logout(){
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}
