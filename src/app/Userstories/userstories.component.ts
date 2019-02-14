import { Component } from '@angular/core';
import { MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})
export class UserstoriesComponent {
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

}
  export interface PeriodicElement {
    userstorysource: string;
    userstoryid: number;
    title: string;
    description: string;
    mappedtestcases: number;
    mappedtasks: number;
    mappedcode: number;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      userstorysource: 'new',
      userstoryid: 1,
      title: 'hyderogen',
      description: 'H',
      mappedtestcases: 1,
      mappedtasks: 1,
      mappedcode: 1
    }
  ];

