import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { OscarNotSoSimpleInputModule } from '../../../oscar-not-so-simple-input/src/lib/oscar-not-so-simple-input.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgSimpleAlertModule, OscarNotSoSimpleInputModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-alert-showcase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-alert-showcase');
  });
});
