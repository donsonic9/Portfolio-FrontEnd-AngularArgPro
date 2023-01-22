import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermodComponent } from './footermod.component';

describe('FootermodComponent', () => {
  let component: FootermodComponent;
  let fixture: ComponentFixture<FootermodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootermodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootermodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
