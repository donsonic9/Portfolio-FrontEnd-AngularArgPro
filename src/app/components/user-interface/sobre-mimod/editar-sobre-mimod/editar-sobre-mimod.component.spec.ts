import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSobreMimodComponent } from './editar-sobre-mimod.component';

describe('EditarSobreMimodComponent', () => {
  let component: EditarSobreMimodComponent;
  let fixture: ComponentFixture<EditarSobreMimodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSobreMimodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSobreMimodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
