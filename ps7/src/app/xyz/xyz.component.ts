import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pkmn, PkmnService} from '../pkmn.service';

@Component({
  selector: 'app-xyz',
  // templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
  template: `
      <form [formGroup]="contactFormGroup" (ngSubmit)="onSubmit()">

          <label>Name:
              <input type="text" formControlName="name" >
          </label>

          <button type="submit" >Submit</button>

          <div *ngIf="contactFormGroup.get('name').errors">
              Name is required and must be longer than 1 character.
          </div>
      </form>


      Value: {{contactFormGroup.controls['name'].value}}<br/>

      <button type="button" (click)="onPress()">Check Pokemon</button>

      <app-xyz-child [pkmnJson]="pkmn"></app-xyz-child>
<!--      <app-hero-child *ngFor="let hero of heroes"-->
<!--                      [hero]="hero"-->
<!--                      [master]="master">-->
<!--      </app-hero-child>-->
  `
})
export class XyzComponent implements OnInit {

  pkmn: Pkmn;
  error: any;
  baseUrl = 'http://localhost:3000/ps6?name=';

  constructor(private pkmnService: PkmnService) { }

  contactFormGroup = new FormGroup(
    {
      name:       new FormControl('', [Validators.required, Validators.minLength(2)]),
      // department: new FormControl(''),
      // UID:        new FormControl(''),
    }
  );

  ngOnInit() {
  }

  onPress() {
    console.log(this.pkmn);
    console.log('hello');
  }

  onSubmit() {
    console.log(`Sending ${this.contactFormGroup.controls.name.value}`);
    // this.showPkmn();
    // this.showRn();
    this.showConfig(this.baseUrl + this.contactFormGroup.controls.name.value);
    // console.log(this.pkmn);
  }

  showConfig(url: string) {
    this.pkmnService.getPkmn(url)
      .subscribe(
        (data: Pkmn) => this.pkmn = { ...data }, // success path
        error => this.error = error // error path
      );
    // console.log(this.pkmn);
  }

  // showPkmn() {
  //   this.pkmnService.getPkmn()
  //     .subscribe((data: Pkmn) => this.pkmn = {
  //       title: data['title'],
  //       name: data['name'],
  //       imageUrl:  data['imageUrl'],
  //       ability: data['ability'],
  //       apiUrl: data['apiUrl'],
  //       cache: data['cache']
  //     });
  //   console.log('pls work:', this.pkmn);
  // }

  // showRn() {
  //   console.log(this.pkmnService.getConfigResponse());
  // }

}
