import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoginService {


  URL = 'http://172.20.206.83/RhytifyAPI/api/token'; /* 'http://172.20.126.27:3000/auth'; */  /* 'http://httpbin.org/post'; */ 
  URLCompanies = 'http://172.20.206.83/RhytifyAPI/api/login'; /* 'http://172.20.126.16/RhytifyAPI/api/login'; */ /* './assets/login.json'; */
  URLConfig = 'http://172.20.206.83/RhytifyAPI/api/configurations'; /* 'http://172.20.126.16/RhytifyAPI/api/configurations'; */ /* './assets/configurations.json'; */
  URLProjectSummary = 'http://172.20.206.83/RhytifyAPI/api/projectsummary';/* 'http://172.20.126.16/RhytifyAPI/api/projectSummary'; */ /* './assets/projectSummary.json'; */
  URLuserStories = 'http://172.20.206.83/RhytifyAPI/api/userstories'; /* 'http://172.20.126.16/RhytifyAPI/api/userStories'; */ /* './assets/userStories.json'; */
  URLtasks = 'http://172.20.206.83/RhytifyAPI/api/tasks'; /* 'http://172.20.126.16/RhytifyAPI/api/tasks'; */ /* './assets/tasks.json'; */
  URLtestCases = 'http://172.20.206.83/RhytifyAPI/api/testcases'; /* 'http://172.20.126.16/RhytifyAPI/api/testCases'; */ /* './assets/testCases.json'; */
  URLsourceCode = 'http://172.20.206.83/RhytifyAPI/api/sourcecode'; /* 'http://172.20.126.16/RhytifyAPI/api/sourceCode'; */ /* './assets/sourceCode.json'; */
  URLMapping= 'http://172.20.206.83/RhytifyAPI/api/mapping';/* './assets/mapping.json'; */
  URLexecution = 'http://172.20.206.83/RhytifyAPI/api/masterData'; /* './assets/execution.json'; */


  constructor(private http: HttpClient, private cookie: CookieService) { }

  
  getmapping(){
    return this.http.get(this.URLMapping);

  }
  getCompanies(): Observable<any> {
    return this.http.get(this.URLCompanies);
  }
  getConfig(): Observable<any> {
    return this.http.get(this.URLConfig);
  }
  getHome(): Observable<any> {
    return this.http.get(this.URLProjectSummary);
  }

  login(companyLocation, project, username, password) {
    return this.http.post(this.URL, { 'companyLocation': companyLocation, 'project': project, 'username': username, 'password': password });
  }

  loggedIn() {
    return !!this.cookie.get('jwtToken');
  }

  getExecution(){
    return this.http.get(this.URLexecution);
  }

  getUserStories(){
    return this.http.get(this.URLuserStories);
  }
  gettasks(){
    return this.http.get(this.URLtasks);
  }
  gettestCases(){
    return this.http.get(this.URLtestCases);
  }
  getsourceCode(){
    return this.http.get(this.URLsourceCode);
  }
  

}
