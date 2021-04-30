import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/models/Students';
import { CommonService } from '../Services/common.service';
import { ServiceHttpService } from '../Services/service-http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServiceHttpService,

    private router: Router
    ) 
    { 
      //this.age = this.common.age; 
    }

  ngOnInit(): void {
    this.loadStudent();
  }

  public loadStudent(){
    this.serverHttp.getStudents().subscribe((data)=> {
      console.log('getStudents',data);
      this.students = data;
    });
  }

  public addStudent(){
    this.router.navigate(['student-form'])
  }

}
