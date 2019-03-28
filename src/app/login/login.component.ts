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
  Id: string;
  CompanyId: string;
  Order: number;
  Name: string;
}



@Component(
  {
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  }
)



export class LoginComponent implements OnInit {

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

      }
    )
  }

  model = {
    companyLocation: '',
    project: '',
    username: '',
    password: ''
  };
  CL: object;
  P: object;
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  passFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router, private data: LoginService, private cookieService: CookieService) { }


  test() {
    this.model.companyLocation = this.officeControl.value;
    this.data.getCompanies().subscribe(
      data => {
        this.proj = data["Projects"];
      }
    )

  }

  test1() {
    this.model.project = this.projectControl.value;
  }


  sendReq() {
    this.data.login( this.officeControl.value.Name, this.projectControl.value.Name, this.model.username, this.model.password)
      .subscribe((success: string) => {
        if (success) {
          
          this.cookieService.set('jwtToken', success);
          this.cookieService.set('companyLocation', this.officeControl.value.Name);
          this.cookieService.set('companyID', this.officeControl.value.Id);
          this.cookieService.set('project', this.projectControl.value.Name);
          this.cookieService.set('username', this.model.username);
          this.router.navigate(['/menu/home']);
        }
        else {
          
        }
      }
      );
  }
}

