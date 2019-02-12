import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../loginService/login.service'
import { Router } from '@angular/router';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate 
{
  constructor(private auth: LoginService, private route: Router) {  }
  canActivate(): boolean 
  {
    if (this.auth.loggedIn()) 
    {
      return true;
    } 
    else 
    {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
