import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaDetalle } from './clinica-detalle';

describe('ClinicaDetalle', () => {
  let component: ClinicaDetalle;
  let fixture: ComponentFixture<ClinicaDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicaDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
