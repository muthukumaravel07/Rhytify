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
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.css']
})
export class SourceCodeComponent implements OnInit {

  config: Config[];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private data: LoginService) { }

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


  titleColumns = ['SOURCE CODE'];
  displayedColumns: string[] = [
    'ExpandCollapse',
    'FileName',
    'ClassName',
    'ClassID',
    'MappedUserStories',
    'MappedTestCases',
    'MappedTasks'];

}
export interface PeriodicElement {
  ExpandCollapse: string;
  FileName: number;
  ClassName: string;
  ClassID: string;
  MappedUserStories: number;
  MappedTestCases: number;
  MappedTasks: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  },
  {
    ExpandCollapse: 'new',
    FileName: 1,
    ClassName: 'hyderogen',
    ClassID: 'H',
    MappedUserStories: 1,
    MappedTestCases: 1,
    MappedTasks: 1
  }


];