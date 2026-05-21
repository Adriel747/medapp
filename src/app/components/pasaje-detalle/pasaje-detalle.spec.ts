import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeDetalle } from './pasaje-detalle';

describe('PasajeDetalle', () => {
  let component: PasajeDetalle;
  let fixture: ComponentFixture<PasajeDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasajeDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(PasajeDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
