import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent {

  fullStudentSummary:undefined|Student[];
  day:string = "";
  timeSlot:string = "";

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void{
    this.studentService.filterForMarkAttendance().subscribe((result) => {
      if(result){
        console.warn("marked attendance -> ",result);
        this.fullStudentSummary = result;
        console.warn("fullStudentSummary -> ",this.fullStudentSummary);

        this.day = this.studentService.scheduleDay;
        this.timeSlot = this.studentService.scheduleTime;
      }
    });
  }


}
