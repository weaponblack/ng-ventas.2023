import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElliminarClienteComponent } from './elliminar-cliente.component';

describe('ElliminarClienteComponent', () => {
  let component: ElliminarClienteComponent;
  let fixture: ComponentFixture<ElliminarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElliminarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElliminarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
