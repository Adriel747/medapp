import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odontologia } from './odontologia';

describe('Odontologia', () => {
  let component: Odontologia;
  let fixture: ComponentFixture<Odontologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Odontologia],
    }).compileComponents();

    fixture = TestBed.createComponent(Odontologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
