import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LoginService } from '../loginService/login.service';

export interface Config {
  Key: string;
  Description: string;
  OptionType: string;
  Options: object;
}
export interface exec_value{
  key:string;
  Value:object;
}

/* export interface sourcetechnology {
  valuest: string;
  viewValuest: string;
}
export interface generalmodel {
  valuegm: string;
  viewValuegm: string;
}
export interface prioritymodel {
  valuepm: string;
  viewValuepm: string;
} */
@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {

  config: Config[];
  exec:exec_value;
  abc: number;

  constructor(private data: LoginService) { }
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 2 : 6;
    this.abc = window.innerWidth;

    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
        /* console.log(this.config); */
      }
    )
    this.data.getExecution().subscribe(
      data => {
        this.exec = data['MasterDataList'];
      }
    )
    /* console.log(this.breakpoint); */
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 2 : 6;
    this.abc = event.target.innerWidth;
    /* console.log(this.breakpoint); */

  }
  /* srcs: sourcetechnology[] = [
    { valuest: 'c#-0', viewValuest: 'C#' },
    { valuest: 'java-1', viewValuest: 'Java' },
  ];
  genmodels: generalmodel[] = [
    { valuegm: 'yes-0', viewValuegm: 'Yes' },
    { valuegm: 'no-1', viewValuegm: 'No' },
  ];
  priorimodels: prioritymodel[] = [
    { valuepm: 'level-0', viewValuepm: 'Class Level' },
    { valuepm: 'level-1', viewValuepm: 'Consolidated Level' },
  ]; */
}
