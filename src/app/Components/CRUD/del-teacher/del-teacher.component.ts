import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Teacher } from 'src/app/Teacher';

@Component({
  selector: 'app-del-teacher',
  templateUrl: './del-teacher.component.html',
  styleUrls: ['./del-teacher.component.scss']
})
export class DelTeacherComponent {

  teacherTable:undefined|Teacher[];

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void{
    this.teacherService.teacherList().subscribe((result) => {
      if(result){
        console.warn("teacher list -> ",result);
        this.teacherTable = result;
      }
    });
  }

  delTeacher(id:number){
    this.teacherService.delTeacherService(id);
    this.teacherService.teacherList();
  }

}
