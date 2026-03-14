import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowStudentComponent } from './follow-student.component';

describe('FollowStudentComponent', () => {
  let component: FollowStudentComponent;
  let fixture: ComponentFixture<FollowStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
