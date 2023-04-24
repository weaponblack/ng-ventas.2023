import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionTwoFAComponent } from './identificacion-two-fa.component';

describe('IdentificacionTwoFAComponent', () => {
  let component: IdentificacionTwoFAComponent;
  let fixture: ComponentFixture<IdentificacionTwoFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionTwoFAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionTwoFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
