import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Admin } from '../Admin';
import { Login } from '../Login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  adminname = new BehaviorSubject<string>('');
  loginSuccess = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router:Router) { }

  // Logic:
  // returns data with particular email and password of input using http get<>.
  // Check if result is not null, body is not null and body has some length.
  // If Body length is null if we dont have data, Hence agar body length null hai means user doesn't exist hence login fails.
  // make flags true to make authguard true and redirect appropriately
  // {observe: "response"} karne se pura output including macros, body and http calls output milta hai
  // else to get custom output, use get<Login> to get only email and password

  adminLoginService(data:Login){
    return this.http.get(`http://localhost:3000/admins?email=${data.email}&password=${data.password}`,{observe:"response"}).subscribe((result:any) => {
      if(result && result.body && result.body.length){
        console.warn(result);
        console.warn("LOGIN SUCCESSFULL");
        localStorage.setItem('admin',JSON.stringify(result.body));

        // make authguard true
        this.isAdminLoggedIn.next(true);
        this.loginSuccess.next(true);

        // redirect
        this.router.navigate(['Components/admin']);
      }
      else{
        console.warn("LOGIN FAILED!");
        // this.router.navigate(['Components/home']);
      }
    });
  }

  reloadAdmin(){
    if(localStorage.getItem('admin')){
      this.isAdminLoggedIn.next(true);
      this.router.navigate(['Components/admin']);
    }
  }
}
