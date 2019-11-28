import { Component } from '@angular/core';
import { NgSimpleAlertService } from '../../../ng-simple-alert/src/lib/ng-simple-alert.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-alert-showcase';
  appFormControl = new FormControl('');
  testForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private alertService: NgSimpleAlertService) {}

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
}
