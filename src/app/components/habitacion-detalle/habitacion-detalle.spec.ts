import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionDetalle } from './habitacion-detalle';

describe('HabitacionDetalle', () => {
  let component: HabitacionDetalle;
  let fixture: ComponentFixture<HabitacionDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
