import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = ' Phat ';
  public age;
  public Camera = ['Canno', 'Fujiflim', 'Sony', 'Leika'];

  constructor( private common: CommonService) { 
    this.age = common.age;
  }

  ngOnInit(): void {
  }
  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
      // if (this.age === 22){
      //   this.name = "bia sai gon"
      // }
      // this.Camera.push(this.name + ' '+ this.age);
  }
}
