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
  tasks: any[];
  breakpoint: number;

  constructor(private data: LoginService) { }

  displayedColumns: string[] = [
    'TaskSource',
    'TaskID',
    'Title',
    'Description',
    'mappedtestcases',
    'mappeduserstories',
    'mappedcode'
  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.breakpoint = window.innerWidth;
    
    this.data.getConfig().subscribe(
      data => {
        this.config = data['Configurations'];
      }
    )


    this.data.gettasks().subscribe(
      data => {
        this.tasks = data['TasksList'];
        this.dataSource = new MatTableDataSource(this.tasks);
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

