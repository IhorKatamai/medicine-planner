import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSchedulesComponent } from './food-schedules.component';

describe('FoodSchedulesComponent', () => {
  let component: FoodSchedulesComponent;
  let fixture: ComponentFixture<FoodSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
