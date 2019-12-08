import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz-master',
  // templateUrl: './xyz-master.component.html',
  styleUrls: ['./xyz-master.component.css'],
  template: `
      <app-xyz></app-xyz>
      <app-xyz-child></app-xyz-child>
  `
})
export class XyzMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
