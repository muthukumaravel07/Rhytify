import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LoginService } from '../loginService/login.service';

@Component({
  selector: 'mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {
  us: any[];
  tc: any[];
  mtc: any;
  mb: any;
  mt: any;

  constructor(private data: LoginService) { }

  displayedColumnsUS = [
    'UserStorySource',
    'UserStoryId',
    'Title',
    'Description'
  ];
  dataSourceUS = new MatTableDataSource([]);

  displayedColumnsT: string[] = [
    'TaskSource',
    'TaskCaseId',
    'Title',
    'Description'
  ];
  dataSourceT = new MatTableDataSource([]);
  
  displayedColumnsTC: string[] = [
    'TestCaseSource',
    'TestCaseId',
    'Title',
    'Description'
  ];
  dataSourceTC = new MatTableDataSource([]);
  
  displayedColumnsB: string[] = [
    'BugsSource',
    'BugsCaseId',
    'Title',
    'Description'
  ];
  dataSourceB = new MatTableDataSource([]);

  ngOnInit() {
    this.data.getmapping().subscribe(
      data => {
        this.us = data['UserStories'];
        this.dataSourceUS = new MatTableDataSource(this.us);
      }
    )
  }
  updateTC(MappedTestCase: any, MappedBugs: any, MappedTask: any){
    this.mtc=MappedTestCase;
    this.dataSourceTC = new MatTableDataSource(this.mtc);
    this.mb=MappedBugs;
    this.dataSourceB = new MatTableDataSource(this.mb);
    this.mt=MappedTask;
    this.dataSourceT = new MatTableDataSource(this.mt);
  }

}