import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('phonenumber is invalid if less than 10 numbers', () => {
    const phone = component.fbForm.get('phone');
    phone?.setValue('123456789');
    expect(phone?.invalid).toBeTrue();
  });

  it('phonenumber is invalid if there is letters in it', () => {
    const phone = component.fbForm.get('phone');
    phone?.setValue('a123456789'); //yksi kirjain alussa
    expect(phone?.invalid).toBeTrue();
  });

  it('name cant have only one letter', () => {
    const name = component.fbForm.get('name');
    name?.setValue('b');
    expect(name?.invalid).toBeTrue();
  });

  it('name should be invalid with special characters', () => {
    const name = component.fbForm.get('name');
    name?.setValue('Markku!!!!');
    expect(name?.invalid).toBeTrue();
  });

  it('email should be invalid if the field is left empty', () => {
    const email = component.fbForm.get('email');
    email?.setValue('');
    expect(email?.invalid).toBeTrue();
  });

  it('cancel button should take to home page', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});
