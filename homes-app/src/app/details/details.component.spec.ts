import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// pp
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
