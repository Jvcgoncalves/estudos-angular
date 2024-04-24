import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProjectTableComponent } from './car-project-table.component';

describe('CarProjectTableComponent', () => {
  let component: CarProjectTableComponent;
  let fixture: ComponentFixture<CarProjectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarProjectTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
