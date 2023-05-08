import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMessageComponent } from './editar-message.component';

describe('EditarMessageComponent', () => {
  let component: EditarMessageComponent;
  let fixture: ComponentFixture<EditarMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
