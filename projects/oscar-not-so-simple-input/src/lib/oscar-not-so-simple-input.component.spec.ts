import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarNotSoSimpleInputComponent } from './oscar-not-so-simple-input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

describe('OscarNotSoSimpleInputComponent', () => {
  let component: OscarNotSoSimpleInputComponent;
  let fixture: ComponentFixture<OscarNotSoSimpleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OscarNotSoSimpleInputComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscarNotSoSimpleInputComponent);
    component = fixture.componentInstance;
    component.inputFormControl = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
