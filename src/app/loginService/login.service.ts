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
  URL = 'http://172.20.126.27:3000/auth'; /*  http://httpbin.org/post  */
  URLCompanies = 'http://172.20.126.10/RhytifyApi/api/login'; /* './assets/userlogin.json'; */
  URLConfig = 'http://172.20.126.10/RhytifyApi/api/configurations'; /* './assets/userconfig.json'; */
  URLProjectSummary = 'http://172.20.126.10/RhytifyApi/api/projectSummary'; /* ./assets/summary.json */
  constructor(private http: HttpClient, private cookie: CookieService) { }

  getCompanies(): Observable<any> {
    return this.http.get(this.URLCompanies);
  }
  getConfig(): Observable<any> {
    return this.http.get(this.URLConfig);
  }

  login(companyLocation, project, username, password) {
    return this.http.post(this.URL, { 'companyLocation': companyLocation, 'project': project, 'username': username, 'password': password });
  }

  loggedIn() {
    return !!this.cookie.get('jwtToken');
  }

}
