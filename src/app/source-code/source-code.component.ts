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
  sourcecode: any[];
  breakpoint: number;

  constructor(private data: LoginService) { }

  displayedColumns: string[] = [
    'SourceCodeSource',
    'SourceCodeID',
    'Title',
    'Description',
    'MappedUserStories',
    'MappedTestCases',
    'MappedTasks'
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

    this.data.getsourceCode().subscribe(
      data => {
        this.sourcecode = data['SourceCodeList'];
        this.dataSource = new MatTableDataSource(this.sourcecode);
        this.dataSource.paginator = this.paginator;
      }
    )

  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
