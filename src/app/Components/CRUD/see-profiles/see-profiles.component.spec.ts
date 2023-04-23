import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProfilesComponent } from './see-profiles.component';

describe('SeeProfilesComponent', () => {
  let component: SeeProfilesComponent;
  let fixture: ComponentFixture<SeeProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
