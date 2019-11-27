import { TestBed } from '@angular/core/testing';

import { NgSimpleAlertService } from './ng-simple-alert.service';
import { TestScheduler } from 'rxjs/testing';

describe('NgSimpleAlertService', () => {
  let sut: NgSimpleAlertService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    sut = new NgSimpleAlertService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a succes message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Successss', message, coler: 'green' };

    sut.createSuccessAlert(message);

    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Danger', message, color: 'red' };

    sut.createDangerAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });
  it('should stream a warning message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange' };

    sut.createWarningAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stram a info message ', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue' };

    sut.createInfoAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });
});
