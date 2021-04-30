
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloword';
  public isOpened = false;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  public openLeftSide(){
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }
  public closedLeftSide(){
    this.isOpened = false;
  }  
}
