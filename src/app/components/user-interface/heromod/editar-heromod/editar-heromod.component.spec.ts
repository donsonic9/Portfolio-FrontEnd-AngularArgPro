import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHeromodComponent } from './editar-heromod.component';

describe('EditarHeromodComponent', () => {
  let component: EditarHeromodComponent;
  let fixture: ComponentFixture<EditarHeromodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHeromodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHeromodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
