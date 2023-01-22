import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpformComponent } from './sign-upform.component';

describe('SignUpformComponent', () => {
  let component: SignUpformComponent;
  let fixture: ComponentFixture<SignUpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
