import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFrasecontactoComponent } from './editar-frasecontacto.component';

describe('EditarFrasecontactoComponent', () => {
  let component: EditarFrasecontactoComponent;
  let fixture: ComponentFixture<EditarFrasecontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFrasecontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFrasecontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
