import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/models/Students';
import { CommonService } from '../Services/common.service';
import { ServiceHttpService } from '../Services/service-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

 // public  name = new FormControl('');
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone :new FormControl(''),
    picture: new FormControl(''),
  });

  constructor(    
    private common: CommonService,
    private serverHttp: ServiceHttpService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  public onSubmit(){

    const newStudent = { };
    
    for (const controlName in this.studentForm.controls){
        if(controlName){    
        	newStudent[controlName] = this.studentForm.controls[controlName].value;
        }
    }
    console.log(newStudent);  
  }
}
