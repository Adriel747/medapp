import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transportes } from './transportes';

describe('Transportes', () => {
  let component: Transportes;
  let fixture: ComponentFixture<Transportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportes],
    }).compileComponents();

    fixture = TestBed.createComponent(Transportes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
