import { Component } from '@angular/core';
import { Login } from 'src/app/Login';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  // to show errors while LOGGING IN
  authError:string="";

  constructor(private studentService: StudentService) {}

  StudentLogin(data:Login){
    console.warn("login data -> ",data);
    this.studentService.StudentLoginService(data);

    if(this.studentService.loginSuccess){
      this.authError="Please enter VALID credentials";
    }
  }
}
