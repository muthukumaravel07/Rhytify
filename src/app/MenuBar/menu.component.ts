import { Component, OnInit } from '@angular/core';


@Component(
  {
    selector: 'app-page2',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  }
)
export class MenuComponent implements OnInit 
{
  name : boolean;
  /* first: boolean; */

  constructor() { }

  ngOnInit() { }           

}
