import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialHeroComponent } from './special-hero.component';

describe('SpecialHeroComponent', () => {
  let component: SpecialHeroComponent;
  let fixture: ComponentFixture<SpecialHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
