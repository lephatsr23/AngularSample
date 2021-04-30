import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['None','NT9', 'R15', 'RJ5', 'NIJAZ1000'];
  private selectedVehicle = '';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    console.log("onSubmit");
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    console.log('selectVehicle = ' + this.selectedVehicle);
  }

  public selectVehicle(event:any){
    console.log("selectVihecle " + event);
    this.selectedVehicle = event.target.value;
  }
}
