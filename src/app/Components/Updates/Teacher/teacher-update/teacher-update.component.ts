import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Teacher } from 'src/app/Teacher';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent {

  teacherId:any
  teacherData:undefined | Teacher;

  constructor(private activatedRoute: ActivatedRoute, private teacherService:TeacherService) {}

  // get id-wise data of teacher and render it on HTML
  ngOnInit(): void{
    this.teacherId = this.activatedRoute.snapshot.paramMap.get('id');
    console.warn("teacher id to be updated -> ",this.teacherId);

    this.teacherId && this.teacherService.getTeacherById(this.teacherId).subscribe((data:Teacher) => {
      if(data){
        console.warn("data of teacher -> ",data);
        console.warn("id of data -> ",data.id);

        this.teacherData = data;
        console.warn("data of teacherData -> ",this.teacherData);

        console.warn("id of teacherData -> ",this.teacherData?.id);
      }
    });
  }

  updatedTeacher(data:Teacher){
    console.warn("data to be updated --> ",data);
    this.teacherService.updateTeacherDataService(data);
  }

}
