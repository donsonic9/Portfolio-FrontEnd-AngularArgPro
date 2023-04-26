import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDescripcioneducacionComponent } from './editar-descripcioneducacion.component';

describe('EditarDescripcioneducacionComponent', () => {
  let component: EditarDescripcioneducacionComponent;
  let fixture: ComponentFixture<EditarDescripcioneducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDescripcioneducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDescripcioneducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
