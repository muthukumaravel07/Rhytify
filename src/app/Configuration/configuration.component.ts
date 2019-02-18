import { Component, OnInit } from '@angular/core';

import { LoginService } from '../loginService/login.service';
export interface Config{
  Key: string;
  Description: string;
  OptionType: string;
  Options: object;
} 


@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  config: Config[];
  
  constructor(private data: LoginService) { }

  ngOnInit() {
    
    this.data.getConfig().subscribe(
      data => {
        this.config = data["Configurations"];
        /* console.log(this.config) */
      }
    )
  }
}
