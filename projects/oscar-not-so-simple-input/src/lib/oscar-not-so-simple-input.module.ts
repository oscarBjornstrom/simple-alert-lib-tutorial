import { NgModule } from '@angular/core';
import { OscarNotSoSimpleInputComponent } from './oscar-not-so-simple-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OscarNotSoSimpleInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [OscarNotSoSimpleInputComponent]
})
export class OscarNotSoSimpleInputModule {}
