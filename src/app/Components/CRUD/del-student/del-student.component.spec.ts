import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelStudentComponent } from './del-student.component';

describe('DelStudentComponent', () => {
  let component: DelStudentComponent;
  let fixture: ComponentFixture<DelStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
