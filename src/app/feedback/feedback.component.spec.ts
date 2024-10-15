import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("phonenumber is invalid if less than 10 numbers", () => {
    const phone = component.fbForm.get("phone");
    phone?.setValue("123456789")
    expect(phone?.invalid).toBeTrue();
  })

  it("name cant have only one letter", () => {
    const name = component.fbForm.get("name")
    name?.setValue("a")
    expect(name?.invalid).toBeTrue();
  });

  it("invalid if no email inserted to email field", () => {
    const email = component.fbForm.get("email")
    email?.setValue("")
    expect(email?.invalid).toBeTrue();
  });

  it("terms and conditions checkbox should be unticked after pageload", () => {
    const terms = component.fbForm.get("termsAndConditions")
    expect(terms?.value).toBe(false);
    // tarkista onko tämä oikein
  });


});
