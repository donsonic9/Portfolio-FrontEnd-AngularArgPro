import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInicioComponent } from './user-inicio.component';

describe('UserInicioComponent', () => {
  let component: UserInicioComponent;
  let fixture: ComponentFixture<UserInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
