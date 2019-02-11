import { Component, OnInit } from '@angular/core';


@Component(
  {
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
  }
)
export class Page2Component implements OnInit 
{
  name : boolean;

  constructor() { }

  ngOnInit() { }           

  fun(): void
  {
    this.name=true;
  }

}
