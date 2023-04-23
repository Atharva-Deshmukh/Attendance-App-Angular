import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../Login';
import { PreReqsForClassroom } from '../PreReqsForClassroom';
import { Schedule } from '../Schedule';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  isStudentLoggedIn = new BehaviorSubject<boolean>(false);
  loginSuccess = new BehaviorSubject<boolean>(false);
  selectedBranch:string = "";
  selectedSubject:string = "";
  scheduleDay:string = "";
  scheduleTime:string = "";
  Timestamp:string = "";

  constructor(private http: HttpClient, private router:Router) { }

  // Logic:
  // returns data with particular email and password of input using http get<>.
  // Check if result is not null, body is not null and body has some length.
  // If Body length is null if we dont have data, Hence agar body length null hai means user doesn't exist hence login fails.
  // make flags true to make authguard true and redirect appropriately
  // {observe: "response"} karne se pura output including macros, body and http calls output milta hai
  // else to get custom output, use get<Login> to get only email and password

  StudentLoginService(data:Login){
    return this.http.get(`http://localhost:3000/students?email=${data.email}&password=${data.password}`,{observe:"response"}).subscribe((result:any) => {
      if(result && result.body && result.body.length){
        console.warn(result);
        console.warn("LOGIN SUCCESSFULL");
        localStorage.setItem('student',JSON.stringify(result.body));

        // make authguard true
        this.isStudentLoggedIn.next(true);
        this.loginSuccess.next(true);

        // redirect
        this.router.navigate(['Components/student']);
      }
      else{
        console.warn("LOGIN FAILED!");
        // this.router.navigate(['Components/home']);
      }
    });
  }

  addStudentService(data:Student){
    return this.http.post('http://localhost:3000/students',data).subscribe((result) => {
      if(result){
        console.warn("student added -> ",result);
        localStorage.setItem('student',JSON.stringify(data));
        this.router.navigate(['Components/admin']);
       }
    });
  }

  delStudentService(id:number){
    return this.http.delete(`http://localhost:3000/students/${id}`).subscribe((result) => {
      if(result){
        this.router.navigate(['Components/CRUD/del-student']);
      }
    });
  }

  studentList() {
    // API is type ka data return karegi
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  getStudentById(id:string){
    return this.http.get<Student>(`http://localhost:3000/students/${id}`);
  }

  updateStudentService(data:Student){
    return this.http.put<Student>(`http://localhost:3000/students/${data.id}`,data).subscribe((result) => {
      if(result){
        console.warn("Updated data -> ",result);
      }
    });
  }

  updatedSelectedBranch(data:PreReqsForClassroom){
    this.selectedBranch = data.Branch;
    this.selectedSubject = data.Subject;
  }

  filterStudentList(){
    return this.http.get<Student[]>(`http://localhost:3000/students/?Branch=${this.selectedBranch}`);
  }

  addSubjectToStudent(id:number){
    return this.http.patch(`http://localhost:3000/students/${id}`,{"Subject":`${this.selectedSubject}`}).subscribe((result) => {
          if(result){
            console.warn("Result after PATCH -> ",result);
          }
        });
  }

  undoSubjectService(id:number){
    return this.http.patch("http://localhost:3000/students/${id}",{"Subject":"NULL"}).subscribe((result) => {
      if(result){
        console.warn("Result after PATCH -> ",result);
      }
    });
  }

  // DATA UPDATE
  // captures schedule values
  scheduleService(data:Schedule){
    console.warn("scheduleService() called")

    this.scheduleDay = data.day;
    console.warn("scheduleDay -> ",this.scheduleDay);
    console.warn("data.day -> ",data.day);

    this.scheduleTime = data.time_slot;
    console.warn("scheduleTime -> ",this.scheduleTime);
    console.warn("data.time_slot -> ",data.time_slot);
  }

  filterForMarkAttendance(){
    console.warn("filterForMarkAttendance() Service is called");
    console.warn("selectedBranch -> ",this.selectedBranch);
    console.warn("selectedSubject-> ",this.selectedSubject);

    return this.http.get<Student[]>(`http://localhost:3000/students/?Branch=${this.selectedBranch}&Subject=${this.selectedSubject}`);
  }

  markAttendanceService(id:number){
    console.warn("markAttendanceService() called");
    console.warn("this.scheduledDay -> ",this.scheduleDay);
    console.warn("this.scheduledTime -> ",this.scheduleTime);

    // Capture timestamp and render on JSON
    this.Timestamp = new Date().toISOString();
    console.warn("Timestamp -> ",this.Timestamp);

    return this.http.patch(`http://localhost:3000/students/${id}`,{"Attendance_day":`${this.scheduleDay}`, "Attendance_TimeSlot":`${this.scheduleTime}`, "Timestamp":`${this.Timestamp}`}).subscribe((result) => {
      if(result){
        console.warn("Result after PATCH -> ",result);
      }
    });
  }

  undoMarkAttendanceService(id:number){
    return this.http.patch(`http://localhost:3000/students/${id}`,{"Attendance_day":"NULL", "Attendance_TimeSlot":"NULL"}).subscribe((result) => {
      if(result){
        console.warn("Result after PATCH -> ",result);
      }
    });
  }
}
