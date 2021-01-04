import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw11Component } from './hw11/hw11.component';
import { Hw12Component } from './hw12/hw12.component';
import { Hw13Component } from './hw13/hw13.component';

@NgModule({
  declarations: [
    AppComponent,
    Hw11Component,
    Hw12Component,
    Hw13Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
