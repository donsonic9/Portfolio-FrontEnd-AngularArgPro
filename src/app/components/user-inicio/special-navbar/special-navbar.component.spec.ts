import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNavbarComponent } from './special-navbar.component';

describe('SpecialNavbarComponent', () => {
  let component: SpecialNavbarComponent;
  let fixture: ComponentFixture<SpecialNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
