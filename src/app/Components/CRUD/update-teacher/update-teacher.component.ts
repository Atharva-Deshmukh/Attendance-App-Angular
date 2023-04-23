import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Teacher } from 'src/app/Teacher';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent {

  teacherTable:undefined|Teacher[];

  constructor(private teacherService: TeacherService, private router:Router) {}

  ngOnInit(): void{
    this.teacherService.teacherList().subscribe((result) => {
      if(result){
        console.warn("teacher list -> ",result);
        this.teacherTable = result;
      }
    });
  }

  UpdateTeacher(id:number){
    this.router.navigate([`Components/Updates/Teacher/teacher-update/${id}`]);
  }


}
