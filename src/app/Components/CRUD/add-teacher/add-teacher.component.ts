import { Component } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Teacher } from 'src/app/Teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent {

  teacherAdded:any;

  constructor(private teacherService: TeacherService) {}

  AddTeacher(data:Teacher){
    console.warn("teacher to be added -> ",data);
    this.teacherService.AddTeacherService(data);
    this.teacherAdded = this.teacherService.isTeacherAdded;
  }

}
