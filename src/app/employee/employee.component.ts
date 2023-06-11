import { Component ,Input} from '@angular/core';
import { ShareDataService } from '../services/sharedata.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  private url: string = `http://localhost:3000/empolyee?emmpolyeename=${this.sharedataservice.user}`;
  employeedata:any;
  employeecomment:any;
  id:any;
ngOnInit(): void {
 fetch(this.url).then((response) => response.json()).then(res=>{this.employeedata=res

})

}

constructor(private sharedataservice:ShareDataService){
  console.log(this.sharedataservice.user);
  
}

onChange(data:any){
  this.id=data.target.id;
  this.employeecomment=data.target.value;

}
onSubmit(){
  console.log(this.id);
  console.log(this.employeecomment)
  fetch(`http://localhost:3000/empolyee/${this.id}`, {
    // Enter your IP address here

    method: "PATCH",

    body: JSON.stringify({"empolyeecomment":`${this.employeecomment}`}), 
    headers: {
        // 'Authorization': `bearer ${token}`,
        "Content-Type": "application/json",
    },
});
alert("your resoponse has been submitted")
}
}
