import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMessageComponent } from './crear-message.component';

describe('CrearMessageComponent', () => {
  let component: CrearMessageComponent;
  let fixture: ComponentFixture<CrearMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
