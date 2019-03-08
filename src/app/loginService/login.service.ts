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
  URL = /* 'http://172.20.126.27:3000/auth'; */  'http://httpbin.org/post';
  URLCompanies = 'http://172.20.204.82/RhytifyAPI/api/login'; /* './assets/login.json'; */
  URLConfig = 'http://172.20.204.82/RhytifyAPI/api/configurations'; /* './assets/configurations.json'; */
  URLProjectSummary = 'http://172.20.126.16/RhytifyAPI/api/projectSummary'; /* './assets/projectSummary.json'; */
  URLuserStories = 'http://172.20.204.82/RhytifyAPI/api/userStories'; /* './assets/userStories.json'; */
  URLtasks = 'http://172.20.204.82/RhytifyAPI/api/tasks'; /* './assets/tasks.json'; */
  URLtestCases = 'http://172.20.204.82/RhytifyAPI/api/testCases'; /* './assets/testCases.json'; */
  URlsourceCode = 'http://172.20.204.82/RhytifyAPI/api/sourceCode'; /* './assets/sourceCode.json'; */
  URLexecution = 'http://172.20.204.82/RhytifyAPI/api/masterData';/* ./assets/execution.json'; */
  constructor(private http: HttpClient, private cookie: CookieService) { }

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
    return this.http.get(this.URlsourceCode);
  }

}
