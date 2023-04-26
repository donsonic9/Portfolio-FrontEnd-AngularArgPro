import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEducacionmodComponent } from './crear-educacionmod.component';

describe('CrearEducacionmodComponent', () => {
  let component: CrearEducacionmodComponent;
  let fixture: ComponentFixture<CrearEducacionmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEducacionmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEducacionmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
