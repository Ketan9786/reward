import { Component,  OnInit } from '@angular/core';
import { ShareDataService } from '../services/sharedata.service'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  mangerUrl :any;
  managercommetn:any;
  id:any;
  constructor(private sharedataservice:ShareDataService){
   
  }

  private url: string = `http://localhost:3000/empolyee?manager=${this.sharedataservice.user}`;
  employeedata: any;
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((res) => {
        this.employeedata = res;
      });
     
      console.log(this.url)
  }
  onClick(){
  //   console.log("kk")
  //  this.url ='';
  //  console.log(this.url)
  }

  onChange(data:any){

    this.url =`http://localhost:3000/empolyee?manager=${this.sharedataservice.user}&empolyeeid=${data.target.value}`

    fetch(this.url)
    .then((response) => response.json())
    .then((res) => {
      this.employeedata = res;
    });
   
    console.log(this.url);
  }

  commetadd(data:any){
    
    this.managercommetn=data.target.value;
    this.id=data.target.id;

  }

  onSubmit(){
    console.log(`http://localhost:3000/empolyee/${this.id}`)
    fetch(`http://localhost:3000/empolyee/${this.id}`, {
      // Enter your IP address here

      method: "PATCH",

      body: JSON.stringify({"managercomment":`${this.managercommetn}`}), 
      headers: {
          // 'Authorization': `bearer ${token}`,
          "Content-Type": "application/json",
      },
  });
    alert("your resoponse has been submitted")
  }
  rating :number=0
  ratingChanged(event:any){
    this.id=event.target.id;
    this.rating=event.target.value;
    console.log(this.rating);
    fetch(`http://localhost:3000/empolyee/${this.id}`, {
      // Enter your IP address here

      method: "PATCH",

      body: JSON.stringify({"rating":`${this.rating}`}), 
      headers: {
          // 'Authorization': `bearer ${token}`,
          "Content-Type": "application/json",
      },
  });
  }
}
