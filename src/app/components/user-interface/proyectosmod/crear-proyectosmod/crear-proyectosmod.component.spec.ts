import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProyectosmodComponent } from './crear-proyectosmod.component';

describe('CrearProyectosmodComponent', () => {
  let component: CrearProyectosmodComponent;
  let fixture: ComponentFixture<CrearProyectosmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProyectosmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProyectosmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
