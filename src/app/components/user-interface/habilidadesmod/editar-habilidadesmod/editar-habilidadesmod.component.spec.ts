import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabilidadesmodComponent } from './editar-habilidadesmod.component';

describe('EditarHabilidadesmodComponent', () => {
  let component: EditarHabilidadesmodComponent;
  let fixture: ComponentFixture<EditarHabilidadesmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHabilidadesmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHabilidadesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
