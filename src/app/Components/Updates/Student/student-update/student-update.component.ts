import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent {

  items = ['CSE', 'IT', 'ECE', 'Mech'];
  selectedItem: string = "";

  studentData:undefined|Student;

  constructor(private activatedRouter: ActivatedRoute, private studentService: StudentService, private router: Router) {}

  ngOnInit(): void{
    let studentId = this.activatedRouter.snapshot.paramMap.get('id');
    console.warn("id to be updated -> ",studentId);

    studentId && this.studentService.getStudentById(studentId).subscribe((result:Student) => {
      if(result){
        console.warn("student data by id -> ",result);
        this.studentData = result;

        console.warn("studentdata by id -> ",this.studentData);

        this.selectedItem = this.studentData.Branch;
      }
    });
  }


  UpdatedStudent(data:Student){
    // call service

    this.studentService.updateStudentService(data);
    this.router.navigate(['Components/admin']);

  }

}
