import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { XyzMasterComponent } from './xyz-master/xyz-master.component';
import { XyzChildComponent } from './xyz-child/xyz-child.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    XyzMasterComponent,
    XyzChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
