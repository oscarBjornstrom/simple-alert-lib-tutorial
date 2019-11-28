import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-oscar-not-so-simple-input',
  template: `
    <div>
      <label [for]="inputId"> {{ label }}</label>
      <input [id]="inputId" type="text" [formControl]="inputFormControl" #input />
    </div>
  `,
  styles: []
})
export class OscarNotSoSimpleInputComponent implements OnInit {
  @Input() label;
  @Input() inputId;
  @Input() inputFormControl;

  constructor() {}

  ngOnInit() {}
}
