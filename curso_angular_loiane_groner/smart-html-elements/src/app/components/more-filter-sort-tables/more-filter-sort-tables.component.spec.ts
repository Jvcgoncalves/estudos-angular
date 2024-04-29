import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFilterSortTablesComponent } from './more-filter-sort-tables.component';

describe('MoreFilterSortTablesComponent', () => {
  let component: MoreFilterSortTablesComponent;
  let fixture: ComponentFixture<MoreFilterSortTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreFilterSortTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreFilterSortTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
