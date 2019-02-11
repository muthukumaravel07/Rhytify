import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginService/login.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

export interface Office 
{
  name: string;
}

@Component(
  {
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
    }
)

export class LoginComponent implements OnInit
{

  officeControl = new FormControl('', [Validators.required]);

  office: Office[] = [
    {name: 'Corporate / Head Office'},
    {name: 'ValueLabs SEZ'},
    {name: 'ValueLabs Solution'},
    {name: 'ValueLabs Technologies Unit -1'},
    {name: 'ValueLabs Technologies Unit -2'},
    {name: 'ValueLabs Technologies -LLP'},
    {name: 'PHP / Cebu Office'}
  ];
  
  projectControl = new FormControl('', [Validators.required]);

  project: Office[] = [
    {name: 'Rhytrify'},
    {name: 'TFS'},
    {name: 'GIT'},
    {name: 'SVN'},
    {name: 'UTMS'}
  ];
  
  model = {
    companyLocation: '',
    project: '',
    username: '',
    password: ''
  };

  hide = true;
  
  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  
  passFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router, private data: LoginService,  private cookieService: CookieService) {  }

  ngOnInit() {  }

  sendReq() 
  {
    
    this.data.login(this.model.companyLocation, this.model.project, this.model.username, this.model.password )
      .subscribe((success: {token: string}) => 
        {
          if (success) 
          {
            console.log('Paramaters successfully passed and response received');
            this.cookieService.set( 'jwtToken', success.token );
            this.router.navigate(['/page2']);
          } 
          else 
          {
            console.log('Login failed');
          }
        }
      );
  }
}

