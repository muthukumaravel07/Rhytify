import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginService/login.service';
export interface Home {
  key: string;
  Value: number;
}
export interface Config{
  Key: string;
  Description: string;
  OptionType: string;
  Options: object;
}
@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home[];
  config: Config[];
    constructor(private data: LoginService) { }
    ngOnInit() {
      this.data.getHome().subscribe(
        data => {
          this.home = data['ProjectSummaryList'];
          /* console.log(this.home); */
        }
      );
      this.data.getConfig().subscribe(
        data => {
          this.config = data['Configurations'];
          /* console.log(this.config); */
        }
      )
    }

}
