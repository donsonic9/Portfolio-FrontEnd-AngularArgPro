import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEducacionmodComponent } from './editar-educacionmod.component';

describe('EditarEducacionmodComponent', () => {
  let component: EditarEducacionmodComponent;
  let fixture: ComponentFixture<EditarEducacionmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEducacionmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEducacionmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
