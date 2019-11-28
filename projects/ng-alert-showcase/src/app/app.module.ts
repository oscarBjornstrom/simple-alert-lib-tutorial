import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { OscarNotSoSimpleInputModule } from '../../../oscar-not-so-simple-input/src/lib/oscar-not-so-simple-input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgSimpleAlertModule, OscarNotSoSimpleInputModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
