import { Component } from '@angular/core';
import { Login } from 'src/app/Login';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent {

  // to show errors while LOGGING IN
  authError:string="";

  constructor(private teacherService: TeacherService) {}

  TeacherLogin(data:Login){
    console.warn("login data -> ",data);
    this.teacherService.TeacherLoginService(data)
    
    if(this.teacherService.loginSuccess){
      this.authError="Please enter VALID credentials";
    }
  }

}
