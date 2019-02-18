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

  constructor(private data: LoginService) { }

  titleColumns = ['TEST CASES'];
  displayedColumns: string[] = [
    'testcasesource',
    'testcaseid',
    'title',
    'description',
    'mappeduserstories',
    'mappedtasks',
    'mappedcode'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
        /* console.log(this.config); */
      }
    )
  }
}
export interface PeriodicElement {
  testcasesource: string;
  testcaseid: number;
  title: string;
  description: string;
  mappeduserstories: number;
  mappedtasks: number;
  mappedcode: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    testcasesource: 'new',
    testcaseid: 1,
    title: 'hyderogen',
    description: 'H',
    mappeduserstories: 1,
    mappedtasks: 1,
    mappedcode: 1
  }
];
