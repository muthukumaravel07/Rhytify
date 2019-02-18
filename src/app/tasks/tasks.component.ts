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
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  config: Config[];
  constructor(private data: LoginService) { }



  titleColumns = ['TASKS'];
  displayedColumns: string[] = [
    'tasksource',
    'taskid',
    'title',
    'description',
    'mappedtestcases',
    'mappeduserstories',
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
  tasksource: string;
  taskid: number;
  title: string;
  description: string;
  mappedtestcases: number;
  mappeduserstories: number;
  mappedcode: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  },
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  },
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  },
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  },
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  },
  {
    tasksource: 'new',
    taskid: 1,
    title: 'hyderogen',
    description: 'H',
    mappedtestcases: 1,
    mappeduserstories: 1,
    mappedcode: 1
  }
];
