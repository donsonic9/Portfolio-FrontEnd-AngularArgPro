import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeromodComponent } from './heromod.component';

describe('HeromodComponent', () => {
  let component: HeromodComponent;
  let fixture: ComponentFixture<HeromodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeromodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeromodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
