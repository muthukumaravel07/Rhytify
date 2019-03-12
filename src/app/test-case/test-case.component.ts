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
  selector: 'test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {

  config: Config[];
  testcase: any[];
  breakpoint: number;

  constructor(private data: LoginService) { }

  displayedColumns: string[] = [
    'TestCaseSource',
    'TestCaseID',
    'Title',
    'Description',
    'mappeduserstories',
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
    this.data.gettestCases().subscribe(
      data => {
        this.testcase = data['TestCasesList'];
        this.dataSource = new MatTableDataSource(this.testcase);
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
