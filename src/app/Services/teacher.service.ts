import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../Login';
import { Teacher } from '../Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  isTeacherLoggedIn = new BehaviorSubject<boolean>(false);
  isTeacherAdded = new BehaviorSubject<boolean>(false);
  loginSuccess = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router:Router) { }

  // Logic:
  // returns data with particular email and password of input using http get<>.
  // Check if result is not null, body is not null and body has some length.
  // If Body length is null if we dont have data, Hence agar body length null hai means user doesn't exist hence login fails.
  // make flags true to make authguard true and redirect appropriately
  // {observe: "response"} karne se pura output including macros, body and http calls output milta hai
  // else to get custom output, use get<Login> to get only email and password

  TeacherLoginService(data:Login){
    return this.http.get(`http://localhost:3000/teachers?email=${data.email}&password=${data.password}`,{observe:"response"}).subscribe((result:any) => {
      if(result && result.body && result.body.length){
        console.warn(result);
        console.warn("LOGIN SUCCESSFULL");
        localStorage.setItem('teacher',JSON.stringify(result.body));

        // make authguard true
        this.isTeacherLoggedIn.next(true);
        this.loginSuccess.next(true);

        // redirect
        this.router.navigate(['Components/teacher']);
      }
      else{
        console.warn("LOGIN FAILED!");
        this.router.navigate(['Components/home']);
      }
    });
  }

  AddTeacherService(data:Teacher){
    return this.http.post('http://localhost:3000/teachers',data).subscribe((result) => {
      if(result){
        console.warn("teacher added -> ",result);
        this.isTeacherAdded.next(true);
        localStorage.setItem('teacher', JSON.stringify(data));
        this.router.navigate(['Components/admin']);
      }
    });
  }

  teacherList() {
    // API is type ka data return karegi
    return this.http.get<Teacher[]>('http://localhost:3000/teachers');
  }

  delTeacherService(id:number){
    return this.http.delete(`http://localhost:3000/teachers/${id}`).subscribe((result) => {
      if(result){
        this.teacherList();
      }
    });
  }

  getTeacherById(id:string){
    return this.http.get<Teacher>(`http://localhost:3000/teachers/${id}`);
  }

  updateTeacherDataService(data:Teacher){
    console.warn("data.id -> ",data.id);
    return this.http.put<Teacher>(`http://localhost:3000/teachers/${data.id}`,data).subscribe((result) => {
      if(result){
        console.warn("data updated via API -> ", data);
      }
    });
  }

}
