import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesmodComponent } from './habilidadesmod.component';

describe('HabilidadesmodComponent', () => {
  let component: HabilidadesmodComponent;
  let fixture: ComponentFixture<HabilidadesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
