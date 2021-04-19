import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderCardComponent } from './gender-card.component';

describe('GenderCardComponent', () => {
  let component: GenderCardComponent;
  let fixture: ComponentFixture<GenderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
