import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { StudentComponent } from './Components/student/student.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AnalysisComponent } from './Components/analysis/analysis.component';
import { AddStudentComponent } from './Components/CRUD/add-student/add-student.component';
import { AddTeacherComponent } from './Components/CRUD/add-teacher/add-teacher.component';
import { DelStudentComponent } from './Components/CRUD/del-student/del-student.component';
import { DelTeacherComponent } from './Components/CRUD/del-teacher/del-teacher.component';
import { CreateClassroomComponent } from './Components/CRUD/create-classroom/create-classroom.component';
import { MarkAttendanceComponent } from './Components/CRUD/mark-attendance/mark-attendance.component';
import { SeeProfilesComponent } from './Components/CRUD/see-profiles/see-profiles.component';
import { UpdateStudentComponent } from './Components/CRUD/update-student/update-student.component';
import { UpdateTeacherComponent } from './Components/CRUD/update-teacher/update-teacher.component';
import { DelClassroomComponent } from './Components/CRUD/del-classroom/del-classroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { UpdateClassroomComponent } from './Components/CRUD/update-classroom/update-classroom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule} from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TeacherUpdateComponent } from './Components/Updates/Teacher/teacher-update/teacher-update.component';
import { StudentUpdateComponent } from './Components/Updates/Student/student-update/student-update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    AdminComponent,
    AnalysisComponent,
    AddStudentComponent,
    AddTeacherComponent,
    DelStudentComponent,
    DelTeacherComponent,
    CreateClassroomComponent,
    MarkAttendanceComponent,
    SeeProfilesComponent,
    UpdateStudentComponent,
    UpdateTeacherComponent,
    DelClassroomComponent,
    UpdateClassroomComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherUpdateComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    NgSelectModule,
    MatMenuModule ,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    TimepickerModule,
    MatRadioModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
