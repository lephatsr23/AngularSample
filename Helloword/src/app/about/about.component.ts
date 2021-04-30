import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServiceHttpService } from '../Services/service-http.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age = 0;
  public name = '';
  public job = '';
  public comments :any;
  public posts :any;

  constructor(
    private common: CommonService,
    private serverHttp: ServiceHttpService
    ) { 
      //this.age = this.common.age; 
    }


  ngOnInit(): void {
    // this.serverHttp.getProfile().subscribe((data)=> {
    //   console.log(data);
    //   this.name = data.name;
    //   this.age = data.age;
    //   this.job = data.job;
    // });

    // this.serverHttp.getComments().subscribe((data)=> {
    //   console.log(data);
    //   this.comments = data;

    // });  
    // this.serverHttp.getPosts().subscribe((data)=> {
    //   console.log('posts',data);
    //   this.comments = data;
    //   this.posts = data;
    // });
  }

  public AddPosts(){
    // // this.age==this.common.age;
    // const newData = {title: 'testing' , author : "author testing"};
    // this.serverHttp.addPosts(newData).subscribe((data)=> {
    //   console.log('addPosts',data);
    //   this.posts.push(data);
    // });  
  }
}
