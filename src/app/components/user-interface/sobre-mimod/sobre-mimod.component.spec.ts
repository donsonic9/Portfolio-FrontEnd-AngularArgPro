import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMimodComponent } from './sobre-mimod.component';

describe('SobreMimodComponent', () => {
  let component: SobreMimodComponent;
  let fixture: ComponentFixture<SobreMimodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMimodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMimodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
