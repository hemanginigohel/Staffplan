import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  location_array:Array<any>=['All location','location 1','location 2'];
  constructor() { }

  ngOnInit() {
  }

}
