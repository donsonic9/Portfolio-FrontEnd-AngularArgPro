import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LognavbarComponent } from './lognavbar.component';

describe('LognavbarComponent', () => {
  let component: LognavbarComponent;
  let fixture: ComponentFixture<LognavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LognavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LognavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
