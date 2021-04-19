import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAgeCardComponent } from './weight-age-card.component';

describe('WeightAgeCardComponent', () => {
  let component: WeightAgeCardComponent;
  let fixture: ComponentFixture<WeightAgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightAgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
