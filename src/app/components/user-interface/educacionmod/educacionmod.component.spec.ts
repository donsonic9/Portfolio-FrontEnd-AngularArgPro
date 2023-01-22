import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionmodComponent } from './educacionmod.component';

describe('EducacionmodComponent', () => {
  let component: EducacionmodComponent;
  let fixture: ComponentFixture<EducacionmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
