import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightCardComponent } from './height-card.component';

describe('HeightCardComponent', () => {
  let component: HeightCardComponent;
  let fixture: ComponentFixture<HeightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
