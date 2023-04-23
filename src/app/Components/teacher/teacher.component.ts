import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {

  teacherName:string = "";
  isTeacherSignedIn:any;

  constructor(private teacherService: TeacherService, private router:Router) {}

  ngOnInit(): void{

    // Get teacher id and display the teacher name

    let teacherString = localStorage.getItem('teacher');
    console.warn("teacher string -> ",teacherString);

    let teacherData = teacherString && JSON.parse(teacherString);
    console.warn("teacher data -> ",teacherData);

    let id = teacherData[0].id;
    console.warn("teacher id  -> ",id);

    this.teacherName = teacherData[0].Name;
    console.warn("teacher name -> ",this.teacherName);

    if(localStorage.getItem('teacher')){
      this.isTeacherSignedIn = true;
    }
  }

  teacherLogout(){
    localStorage.removeItem('teacher');
  }

  createClassroom(){
    this.router.navigate(['Components/CRUD/create-classroom']);
  }

  deleteClassroom(){
    this.router.navigate(['Components/CRUD/del-classroom']);
  }

  scheduleLecture(){
    this.router.navigate(['Components/CRUD/create-classroom']);
  }

  markAttendance(){
    this.router.navigate(['Components/CRUD/mark-attendance']);
  }

}
