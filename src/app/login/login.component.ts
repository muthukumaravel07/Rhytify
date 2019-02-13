import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginService/login.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

export interface Office {
  name: string;
}




export interface compLoc {
  Id: string;
  Order: number;
  Name: string;
}
export interface Proj { 
  Id:string;
  CompanyId:string;
  Order:number;
  Name:string;
}



@Component(
  {
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  }
)



export class LoginComponent implements OnInit {

i:number;
j:number;
  cid: string;
  officeControl = new FormControl('', [Validators.required]);
  projectControl = new FormControl('', [Validators.required]);
  
  comploc: compLoc[];
  proj: Proj[];
  projname: string[];
  ngOnInit() {
    this.data.getCompanies().subscribe(
      data => {
        this.comploc = data["Companies"];
        /* console.log(this.comploc) */

      }
    )
  }

  



  GroupO: Office[] = [
    { name: 'Samsung_Delta' },
    { name: 'GroupO_Demo' }
  ];
  ValueLabs: Office[] = [
    { name: 'RhytrifyServiceAPI' },
    { name: 'Rhytrify' }
  ];
  UTMSDEMO: Office[] = [
    { name: 'selenium' },
    { name: 'TAF_QA' },
    { name: 'JIRA Functionality' }
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

  constructor(private router: Router, private data: LoginService, private cookieService: CookieService) { }


  test() {
    /* console.log(this.officeControl.value.Name);
    console.log(this.officeControl.value.Id); */
    this.model.companyLocation=this.officeControl.value;
    this.data.getCompanies().subscribe(
      data => {
        this.proj = data["Projects"];
         
       /*  for(this.i=0,this.j=0;this.i<8;this.i++){
          
          if(this.proj[this.i].CompanyId==this.officeControl.value.Id)
          { 
            this.projname=this.proj[this.i].Name;
          }

        }
        console.log(this.projname) */


      }
    )

  }
  test1() {
    /* console.log(this.projectControl.value.Name); */
    this.model.project=this.projectControl.value;
  }


  sendReq() {


    this.data.login(this.model.companyLocation, this.model.project, this.model.username, this.model.password)
      .subscribe((success: { token: string }) => {
        if (success) {
          console.log('Paramaters successfully passed and response received',success);
          this.cookieService.set('jwtToken', success.token);
          this.router.navigate(['/menu/home']);
        }
        else {
          console.log('Login failed');
        }
      }
      );
  }
}

