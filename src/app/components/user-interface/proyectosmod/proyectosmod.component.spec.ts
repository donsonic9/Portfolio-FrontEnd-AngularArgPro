import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosmodComponent } from './proyectosmod.component';

describe('ProyectosmodComponent', () => {
  let component: ProyectosmodComponent;
  let fixture: ComponentFixture<ProyectosmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
