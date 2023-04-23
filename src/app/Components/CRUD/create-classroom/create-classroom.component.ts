import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreReqsForClassroom } from 'src/app/PreReqsForClassroom';
import { Schedule } from 'src/app/Schedule';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.scss']
})
export class CreateClassroomComponent {

  proceedClicked:boolean = false;
  proceed1Clicked:boolean = false;
  filteredStudentTable:undefined|Student[];

  Branches = ['CSE', 'IT', 'ECE', 'Mech'];
  selectedBranch: string = "";

  Subjects = ['Cpp', 'Fluid Mechanics', 'Current Electricity', 'Information Technology'];
  selectedSubject: string = "";

  Days = ['Monday','Tuesday','Wednesday'];
  selectedDay: string = "";

  Time = ['1:00 PM','2:00 PM','3:00 PM'];
  selectedTime: string = "";

  constructor(private teacherService:TeacherService, private studentService:StudentService, private router:Router) {}

  PoceedToCreateClassroom(data:PreReqsForClassroom){
    console.warn("preReqs filled -> ",data);
    this.studentService.updatedSelectedBranch(data);

    this.studentService.filterStudentList().subscribe((result:Student[]) => {
      if(result){
        this.filteredStudentTable = result;
        console.warn("filtered students data -> ",this.filteredStudentTable);
      }
    });

    this.proceedClicked = true;
  }

  // us id ke student ko modify karega using http patch and add {subject: } to that student in its JSON
  AddToClass(id:number){
      this.studentService.addSubjectToStudent(id);

  }

  Undo(id:number){
    this.studentService.undoSubjectService(id);
  }

  scheduleLec(){
    this.proceed1Clicked = true;
  }

  finish(data:Schedule){
    console.warn("finish() called");
    console.warn("schedule data -> ",data);
    console.warn("data.day -> ",data.day);
    console.warn("data.time_slot -> ",data.time_slot);
    this.studentService.scheduleService(data);
    this.router.navigate(['Components/CRUD/mark-attendance']);
  }

}
