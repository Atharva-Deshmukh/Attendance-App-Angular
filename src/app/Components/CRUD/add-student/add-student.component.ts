import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  items = ['CSE', 'IT', 'ECE', 'Mech'];
  selectedItem: string = "";

  constructor(private studentService:StudentService) {}

  AddStudent(data: Student){
    this.studentService.addStudentService(data);
  }

}
