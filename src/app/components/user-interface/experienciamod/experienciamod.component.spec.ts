import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciamodComponent } from './experienciamod.component';

describe('ExperienciamodComponent', () => {
  let component: ExperienciamodComponent;
  let fixture: ComponentFixture<ExperienciamodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciamodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciamodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
