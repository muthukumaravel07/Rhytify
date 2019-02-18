import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { LoginService } from '../loginService/login.service';

export interface Config {
  Key: string;
  Description: string;
  OptionType: string;
  Options: object;
}

export interface PeriodicElement {
  userstorysource: string;
  userstoryid: number;
  title: string;
  description: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  },
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  },
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  },
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  },
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  },
  {
    userstorysource: 'new',
    userstoryid: 1,
    title: 'hyderogen',
    description: 'H'
  }
];




@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})
export class UserstoriesComponent implements OnInit {

  config: Config[];
  constructor(private data: LoginService) { }
  titleColumns = ['USER STORIES'];
  displayedColumns: string[] = [
    'userstorysource',
    'userstoryid',
    'title',
    'description',
    'mappedtestcases',
    'mappedtasks',
    'mappedcode'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
      }
    )

    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
      }
    )



  }

}
