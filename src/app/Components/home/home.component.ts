import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router:Router) {}

  adminLogin(){
    this.router.navigate(['Components/admin-login']);
  }

  teacherLogin(){
    this.router.navigate(['Components/teacher-login']);
  }

  studentLogin(){
    this.router.navigate(['Components/student-login']);
  }

}
