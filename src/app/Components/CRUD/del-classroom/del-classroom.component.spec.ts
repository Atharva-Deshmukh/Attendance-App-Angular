import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelClassroomComponent } from './del-classroom.component';

describe('DelClassroomComponent', () => {
  let component: DelClassroomComponent;
  let fixture: ComponentFixture<DelClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
