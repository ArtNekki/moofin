import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePlanComponent } from './house-plan.component';

describe('HousePlanComponent', () => {
  let component: HousePlanComponent;
  let fixture: ComponentFixture<HousePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
