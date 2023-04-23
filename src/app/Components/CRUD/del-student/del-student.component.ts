import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-del-student',
  templateUrl: './del-student.component.html',
  styleUrls: ['./del-student.component.scss']
})
export class DelStudentComponent {

  studentTable:undefined|Student[];

  constructor(private studentService:StudentService) {}

  ngOnInit(): void{
    this.studentService.studentList().subscribe((result) => {
      if(result){
        console.warn("Student list -> ",result);
        this.studentTable = result;
      }
    });
  }

  delStudent(id:number){
    this.studentService.delStudentService(id);
  }

}
