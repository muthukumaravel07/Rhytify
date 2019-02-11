import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { Page2Component } from './page2/page2.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token/token-interceptor.service';
import { Page3Component } from './page3/page3.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home', 
    component: LoginComponent
  },
  {
    path: 'page3', 
    component: Page3Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [AuthGuard]
  }

];

@NgModule(
  {
    declarations: 
    [
      AppComponent,
      LoginComponent,
      Page2Component,
      Page3Component
    ],
    imports: 
    [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule, 
      FormsModule, 
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    providers: 
    [ 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true,
      }, 
      CookieService, 
      AuthGuard
    ],
    bootstrap: [ AppComponent ]
  }
)
export class AppModule { }
