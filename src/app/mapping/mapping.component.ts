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
  task:any[];
  test:any[];
  bugs:any[];
  tc: any[];
  mtc: any;
  mb: any;
  mt: any;
  mc:any;
  count:string='empty';

  constructor(private data: LoginService, private data2: LoginService,private data3: LoginService, private data4: LoginService) { }
  

  displayedColumnsUS = [
    'UserStorySource',
    'UserStoryId',
    'Title',
    'Description'
  ];
  activeUserStory: any;
  dataSourceUS = new MatTableDataSource([]);
  dataSourceUS1 = new MatTableDataSource([]);

  displayedColumnsT: string[] = [
    'TaskSource',
    'TaskCaseId',
    'Title',
    'Description'
  ];
  dataSourceT = new MatTableDataSource([]);
  dataSourceT1 = new MatTableDataSource([]);
  
  displayedColumnsTC: string[] = [
    'TestCaseSource',
    'TestCaseId',
    'Title',
    'Description'
  ];
  dataSourceTC = new MatTableDataSource([]);
  dataSourceTC1 = new MatTableDataSource([]);
  
  displayedColumnsB: string[] = [
    'BugsSource',
    'BugsCaseId',
    'Title',
    'Description'
  ];
  dataSourceB = new MatTableDataSource([]);
  dataSourceB1 = new MatTableDataSource([]);

  ngOnInit() {
    this.data.getmapping().subscribe(
      data => {
        this.us = data['UserStories'];
        this.dataSourceUS1 = new MatTableDataSource(this.us);
      }
    );
    this.data2.getmappingtask().subscribe(
      data2 => {
        this.task = data2['MappingTask'];
        this.dataSourceT1 = new MatTableDataSource(this.task);
      }
    );
    this.data3.getmappingtest().subscribe(
      data3 => {
        this.test = data3['MappingTest'];
        this.dataSourceTC1 = new MatTableDataSource(this.test);
      }
    );
    ;
    this.data4.getmappingbugs().subscribe(
      data4 => {
        this.bugs = data4['MappingBugs'];
        this.dataSourceB1 = new MatTableDataSource(this.bugs);
      }
    );

  }
  updateUser(MappedTestCase: any, MappedBugs: any, MappedTask: any){
    this.count='user';
    this.mtc=MappedTestCase;
    /* this.activeUserStory = [
      {Description: element.Description, Title: element.Title, UserStoryId: element.UserStoryId, UserStorySource: element.UserStorySource}]; */
    console.log(this.activeUserStory, '=---', this.mtc)
    this.dataSourceTC = new MatTableDataSource(this.mtc);
    this.mb=MappedBugs;
    this.dataSourceB = new MatTableDataSource(this.mb);
    this.mt=MappedTask;
    this.dataSourceT = new MatTableDataSource(this.mt);
  }
  /* updateTT(){
    this.count=1;
    this.dataSourceUS1 = new MatTableDataSource(this.activeUserStory);
    console.log(this.activeUserStory);
  } */
  updateTask(MappedTestCase: any, MappedBugs: any, MappedUser: any){
    this.count='task';
    this.mtc=MappedTestCase;
    this.dataSourceTC = new MatTableDataSource(this.mtc);
    this.mb=MappedBugs;
    this.dataSourceB = new MatTableDataSource(this.mb);
    this.mc=MappedUser;
    this.dataSourceUS = new MatTableDataSource(this.mc);
  }
  updateTest(MappedTask: any, MappedBugs: any, MappedUser: any){
    this.count='test';
    this.mt=MappedTask;
    this.dataSourceT = new MatTableDataSource(this.mt);
    this.mb=MappedBugs;
    this.dataSourceB = new MatTableDataSource(this.mb);
    this.mc=MappedUser; 
    this.dataSourceUS = new MatTableDataSource(this.mc);
  }
  updateBugs(MappedTask: any, MappedTestCase: any, MappedUser: any){
    this.count='bugs';
    this.mc=MappedUser;
    this.dataSourceUS = new MatTableDataSource(this.mc);
    this.mt=MappedTask;
    this.dataSourceT = new MatTableDataSource(this.mt);
    this.mtc=MappedTestCase;
    this.dataSourceTC = new MatTableDataSource(this.mtc);
    console.log(this.mtc);


  }

}
