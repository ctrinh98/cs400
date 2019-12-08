import {Component, Input, OnInit} from '@angular/core';
import {Pkmn} from '../pkmn.service';

@Component({
  selector: 'app-xyz-child',
  // templateUrl: './xyz-child.component.html',
  styleUrls: ['./xyz-child.component.css'],
  template: `
<!--    <h3>{{hero.name}} says:</h3>-->
<!--    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>-->
<div *ngIf="pkmnJson">
    <h3><u>{{pkmnJson.name}}</u>, wow!</h3>
    <img [attr.src]="pkmnJson.imageUrl" alt=""/>
    <p><b>{{pkmnJson.ability}}</b> is the first ability he learns.</p>
    <p><b>{{pkmnJson.apiUrl}}</b> is where the data was retrieved from.</p>
    <p><b>{{pkmnJson.cache}}</b>: whether or not the data was cached in MongoDB.</p>
</div>
  `
})
export class XyzChildComponent implements OnInit {

  @Input('pkmnJson') pkmnJson: Pkmn;

  constructor() { }

  ngOnInit() {
  }

}
