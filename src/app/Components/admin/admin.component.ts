import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  adminName:string = "";
  isAdminSignedIn:any;

  constructor(private adminService: AdminService, private router:Router) {}

  ngOnInit(): void{

    // Get Admin id and display the admin name

    let adminString = localStorage.getItem('admin');
    console.warn("admin string -> ",adminString);

    let adminData = adminString && JSON.parse(adminString);
    console.warn("admin data -> ",adminData);

    let id = adminData[0].id;
    console.warn("admin id  -> ",id);

    this.adminName = adminData[0].name;
    console.warn("admin name -> ",this.adminName);

    if(localStorage.getItem('admin')){
      this.isAdminSignedIn = true;
    }
  }

  addTeacher(){
    this.router.navigate(['Components/CRUD/add-teacher']);
  }

  addStudent(){
    this.router.navigate(['Components/CRUD/add-student']);
  }

  removeTeacher(){
    this.router.navigate(['Components/CRUD/del-teacher']);
  }

  adminLogout(){
    localStorage.removeItem('admin');
  }

  removeStudent(){
    this.router.navigate(['Components/CRUD/del-student']);
  }

  updateTeacher(){
    this.router.navigate(['Components/CRUD/update-teacher']);
  }

  updateStudent(){
    this.router.navigate(['Components/CRUD/update-student']);
  }


}
