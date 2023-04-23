import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './AuthGuards/admin-auth.guard';
import { StudentAuthGuard } from './AuthGuards/student-auth.guard';
import { TeacherAuthGuard } from './AuthGuards/teacher-auth.guard';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AnalysisComponent } from './Components/analysis/analysis.component';
import { AddStudentComponent } from './Components/CRUD/add-student/add-student.component';
import { AddTeacherComponent } from './Components/CRUD/add-teacher/add-teacher.component';
import { CreateClassroomComponent } from './Components/CRUD/create-classroom/create-classroom.component';
import { DelClassroomComponent } from './Components/CRUD/del-classroom/del-classroom.component';
import { DelStudentComponent } from './Components/CRUD/del-student/del-student.component';
import { DelTeacherComponent } from './Components/CRUD/del-teacher/del-teacher.component';
import { MarkAttendanceComponent } from './Components/CRUD/mark-attendance/mark-attendance.component';
import { SeeProfilesComponent } from './Components/CRUD/see-profiles/see-profiles.component';
import { UpdateClassroomComponent } from './Components/CRUD/update-classroom/update-classroom.component';
import { UpdateStudentComponent } from './Components/CRUD/update-student/update-student.component';
import { UpdateTeacherComponent } from './Components/CRUD/update-teacher/update-teacher.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { StudentUpdateComponent } from './Components/Updates/Student/student-update/student-update.component';
import { TeacherUpdateComponent } from './Components/Updates/Teacher/teacher-update/teacher-update.component';

const routes: Routes = [
{
  component:HomeComponent,
  path:''
},
{
  component:AnalysisComponent,
  path:'Components/analysis'
},
{
  component:AdminLoginComponent,
  path:'Components/admin-login'
},
{
  component:StudentLoginComponent,
  path:'Components/student-login'
},
{
  component:TeacherLoginComponent,
  path:'Components/teacher-login'
},
{
  component: TeacherComponent,
  path:'Components/teacher',
  canActivate:[TeacherAuthGuard]
},
{
  component:StudentComponent,
  path:'Components/student',
  canActivate:[StudentAuthGuard]
},
{
  component:AdminComponent,
  path:'Components/admin',
  canActivate:[AdminAuthGuard]
},
{
  component:AddStudentComponent,
  path:'Components/CRUD/add-student',
  canActivate:[AdminAuthGuard,TeacherAuthGuard]
},
{
  component:AddTeacherComponent,
  path:'Components/CRUD/add-teacher',
  canActivate:[AdminAuthGuard]
},
{
  component:DelStudentComponent,
  path:'Components/CRUD/del-student',
  canActivate:[AdminAuthGuard,TeacherAuthGuard]
},
{
  component:DelTeacherComponent,
  path:'Components/CRUD/del-teacher',
  canActivate:[AdminAuthGuard]
},
{
  component:CreateClassroomComponent,
  path:'Components/CRUD/create-classroom',
  canActivate:[TeacherAuthGuard]
},
{
  component:DelClassroomComponent,
  path:'Components/CRUD/del-classroom',
  canActivate:[TeacherAuthGuard]
},
{
  component:SeeProfilesComponent,
  path:'Components/CRUD/see-profiles',
  canActivate:[AdminAuthGuard,TeacherAuthGuard, StudentAuthGuard]
},
{
  component:UpdateStudentComponent,
  path:'Components/CRUD/update-student',
  canActivate:[AdminAuthGuard]
},
{
  component:UpdateTeacherComponent,
  path:'Components/CRUD/update-teacher',
  canActivate:[AdminAuthGuard]
},
{
  component:MarkAttendanceComponent,
  path:'Components/CRUD/mark-attendance',
  canActivate:[TeacherAuthGuard]
},
{
  component:UpdateClassroomComponent,
  path:'Components/CRUD/update-classroom',
  canActivate:[TeacherAuthGuard]
},
{
  component:TeacherUpdateComponent,
  path:'Components/Updates/Teacher/teacher-update/:id',
  canActivate:[AdminAuthGuard]
},
{
  component: StudentUpdateComponent,
  path:'Components/Updates/Student/student-update/:id',
  canActivate:[AdminAuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
