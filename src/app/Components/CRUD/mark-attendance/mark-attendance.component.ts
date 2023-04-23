import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent {

  attendanceList:undefined|Student[];
  subject:string = "";
  day:string = "";
  timeSlot:string = "";
  branchChoosed:string = "";

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void{
    this.studentService.filterForMarkAttendance().subscribe((result) => {
      if(result){
        console.warn("to mark attendance -> ",result);
        this.attendanceList = result;
        console.warn("attendanceList -> ",this.attendanceList);

        this.day = this.studentService.scheduleDay;
        console.warn("day -> ",this.day);

        this.timeSlot = this.studentService.scheduleTime;
        console.warn("timeSlot -> ",this.timeSlot);

        this.branchChoosed = this.studentService.selectedBranch;
        console.warn("branchChoosed -> ",this.branchChoosed);
      }
    });
  }

  markAttendance(id:number){
    console.warn("markAttendance() called");
    this.studentService.markAttendanceService(id);
  }

  Undo(id:number){
    this.studentService.undoMarkAttendanceService(id);
  }

  Summary(){
    this.router.navigate(['Components/analysis']);
  }

}
