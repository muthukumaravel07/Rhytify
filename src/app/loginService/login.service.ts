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
  
  URL =   /* 'http://httpbin.org/post'; */ 'http://172.20.204.82/RhytifyAPI/api/token';
  URLCompanies = 'http://172.20.204.82/RhytifyAPI/api/login'; /* './assets/login.json'; */
  URLConfig = 'http://172.20.204.82/RhytifyAPI/api/configurations'; /* './assets/configurations.json'; */
  URLProjectSummary = 'http://172.20.204.82/RhytifyAPI/api/projectsummary'; /* './assets/projectSummary.json'; */
  URLuserStories = 'http://172.20.204.82/RhytifyAPI/api/userstories'; /* './assets/userStories.json'; */
  URLtasks = 'http://172.20.204.82/RhytifyAPI/api/tasks'; /* './assets/tasks.json'; */
  URLtestCases = 'http://172.20.204.82/RhytifyAPI/api/testcases'; /* './assets/testCases.json'; */
  URLsourceCode = 'http://172.20.204.82/RhytifyAPI/api/sourcecode'; /* './assets/sourceCode.json'; */
  URLMapping= 'http://172.20.204.82/RhytifyAPI/api/mapping';/* './assets/mapping.json'; */
  URLexecution = 'http://172.20.204.82/RhytifyAPI/api/masterData'; /* './assets/execution.json'; */
  URLMappingTask= 'http://172.20.204.82/RhytifyAPI/api/mappingtask';/* './assets/mappingtask.json'; */
  URLMappingTest= 'http://172.20.204.82/RhytifyAPI/api/mappingtest'; /* './assets/mappingtest.json'; */
  URLMappingBugs='http://172.20.204.82/RhytifyAPI/api/mappingbugs';/* './assets/mappingbug.json'; */

  constructor(private http: HttpClient, private cookie: CookieService) { }

  
  getmapping(){
    return this.http.get(this.URLMapping);
  }
  getmappingtask(){
    return this.http.get(this.URLMappingTask);
  }
  getmappingtest(){
    return this.http.get(this.URLMappingTest);
  }
  getmappingbugs(){
    return this.http.get(this.URLMappingBugs);
  }
  getCompanies(): Observable<any> {
    return this.http.get(this.URLCompanies);
  }
  getConfig(): Observable<any> {
    console.log();
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
