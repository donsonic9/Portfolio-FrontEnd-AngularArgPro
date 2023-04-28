import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProyectosmodComponent } from './editar-proyectosmod.component';

describe('EditarProyectosmodComponent', () => {
  let component: EditarProyectosmodComponent;
  let fixture: ComponentFixture<EditarProyectosmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProyectosmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProyectosmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
