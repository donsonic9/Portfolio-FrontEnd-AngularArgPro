import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmodComponent } from './navbarmod.component';

describe('NavbarmodComponent', () => {
  let component: NavbarmodComponent;
  let fixture: ComponentFixture<NavbarmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
