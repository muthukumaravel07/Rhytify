import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LoginService } from '../loginService/login.service';

export interface Config {
  Key: string;
  Description: string;
  OptionType: string;
  Options: object;
}

@Component({
  selector: 'userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})
export class UserstoriesComponent implements OnInit {

  config: Config[];
  userStories: any[];
  breakpoint: number;

  constructor(private data: LoginService) { }
  
  displayedColumns = [
    'UserStorySource',
    'UserStoryID',
    'Title',
    'Description',
    'mappedtestcases',
    'mappedtasks',
    'mappedcode'
  ]
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.breakpoint = window.innerWidth;
    
    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
      }
    )


    this.data.getUserStories().subscribe(
      data => {
        this.userStories = data['UserStoriesList'];
        this.dataSource = new MatTableDataSource(this.userStories);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth;
    console.log(this.breakpoint);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
