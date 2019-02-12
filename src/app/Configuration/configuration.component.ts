import { Component, OnInit } from '@angular/core';

/* export interface CardDetails 
{
  img: string;
  name: string;
  content: string;
  rad: boolean;
  norad: number[];
  radname: string[];
  radselected: number;

} */


@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  /* cardDetails: CardDetails[] = [
    {
      img: '1',
      name: 'Source Control',
      content: 'Configure the external system that is the Source Control.',
      rad: true,
      norad: [1,2,3],
      radname: ['TFS','GIT','SVN'],
      radselected: 1
    },
    {
      img: '2',
      name: 'User Story',
      content: 'Configure the external system that hosts the User Stories.',
      rad: true,
      norad: [1,2],
      radname: ['TFS','RHYTIFY',''],
      radselected: 1
    },
    {
      img: '3',
      name: 'Task',
      content: 'Configure the external system that hosts the Tasks.',
      rad: true,
      norad: [1,2],
      radname: ['TFS','RHYTIFY',''],
      radselected: 1
    },
    {
      img: '4',
      name: 'Test Case Management',
      content: 'Configure the external system that hosts the Test Cases.',
      rad: true,
      norad: [1,2,3],
      radname: ['TFS','RHYTIFY','UTMS'],
      radselected: 1
    },
    {
      img: '5',
      name: 'Bugs',
      content: 'Configure the external system that hosts the Bugs.',
      rad: true,
      norad: [1,2],
      radname: ['TFS','RHYTIFY',''],
      radselected: 1
    },
    {
      img: '6',
      name: 'TFS Configuration',
      content: 'Provide the TFS parameter values to connect to TFS.',
      rad: false,
      norad: [],
      radname: ['','',''],
      radselected: 0
    },
    {
      img: '7',
      name: 'GIT Configuration',
      content: 'Provide the GIT parameter values to connect to GIT.',
      rad: false,
      norad: [],
      radname: ['','',''],
      radselected: 0
    },
    {
      img: '8',
      name: 'SVN Configuration',
      content: 'Provide the SVN parameter values to connect to SVN.',
      rad: false,
      norad: [],
      radname: ['','',''],
      radselected: 0
    },
    {
      img: '9',
      name: 'UTMS Configuration',
      content: 'Provide UTMS URL.',
      rad: false,
      norad: [],
      radname: ['','',''],
      radselected: 0
    }
  ];
 */
  constructor() { }

  ngOnInit() {
  }



}
