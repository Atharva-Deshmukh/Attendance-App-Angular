import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent {

  studentTable:undefined|Student[];

  constructor(private studentService:StudentService, private router:Router) {}

  ngOnInit(): void{
    this.studentService.studentList().subscribe((result:Student[]) => {
      if(result){
        console.warn("Student list -> ",result);
        this.studentTable = result;
        console.warn("StudentTable -> ",this.studentTable);
      }
    });
  }

  updateStudent(id:number){
    this.router.navigate([`Components/Updates/Student/student-update/${id}`]);
  }

}
