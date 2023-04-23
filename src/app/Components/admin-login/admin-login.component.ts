import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Login';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  // to show errors while LOGGING IN
  authError:string="";

  constructor(private adminService: AdminService) {}

  ngOnInit(): void{
    this.adminService.reloadAdmin();
  }

  AdminLogin(data:Login){
    console.warn("login data -> ",data);
    this.adminService.adminLoginService(data);

    if(this.adminService.loginSuccess){
      this.authError="Please enter VALID credentials";
    }
  }

}
