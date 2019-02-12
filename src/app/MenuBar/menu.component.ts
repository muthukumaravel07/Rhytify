import { Component, OnInit } from '@angular/core';

export interface Project {
  value: string;
}

@Component(
  {
    selector: 'app-page2',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  }
)
export class MenuComponent implements OnInit 
{
  projects: Project[]= [
    {value: 'RhytifyServiceeAPI'},
    {value: 'Rhytify'}
  ];
  UserName="RhytifyUser";
  /* first: boolean; */

  constructor() { }

  ngOnInit() { }           

}
