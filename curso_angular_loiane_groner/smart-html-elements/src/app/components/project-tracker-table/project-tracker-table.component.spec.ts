import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTrackerTableComponent } from './project-tracker-table.component';

describe('ProjectTrackerTableComponent', () => {
  let component: ProjectTrackerTableComponent;
  let fixture: ComponentFixture<ProjectTrackerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTrackerTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectTrackerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
