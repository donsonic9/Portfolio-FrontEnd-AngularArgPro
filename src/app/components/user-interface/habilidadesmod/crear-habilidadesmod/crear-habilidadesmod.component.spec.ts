import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabilidadesmodComponent } from './crear-habilidadesmod.component';

describe('CrearHabilidadesmodComponent', () => {
  let component: CrearHabilidadesmodComponent;
  let fixture: ComponentFixture<CrearHabilidadesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHabilidadesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHabilidadesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
