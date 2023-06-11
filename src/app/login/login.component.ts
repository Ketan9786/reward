import { Component,Injectable} from '@angular/core';
import { ShareDataService } from '../services/sharedata.service'


@Injectable({
  providedIn:"root"
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export  class LoginComponent {
  Admin: string = 'Admin';
  AdminPass: number = 1234;
  routpath:string=''
  Manger: string[] = ['Nilesh', 'Kishor', 'Sunil'];
  Mangerpass: number = 1234;
 
  Employee: string[] = [
    'Ketan',
    'Vicky',
    'Pratik',
    'Prakash',
    'Vishal',
    'Ankit',
    'Vinit',
    'Subhash',
    'Abhi',
    'Richa',
    'Jyoti',
    'Sakshi',
    'Prathemesh',
    'Pooja',
    'Mohan',
    'Ram',
    'Shnakar',
    'Abhishek',
    'Aanad',
    'Nitesh',
  ];
  Employeepass: number = 2468;

  username: string = '';
  
  password: any;
 
  onClick() {
 
    if (this.username == this.Admin && this.password == this.AdminPass) {
      console.log(true);
      this.username = '';
      this.password = '';
      this.routpath='admin';
      
    } else if (this.username != this.Admin) {
      for (let i = 0; i < this.Manger.length; i++) {
        if (
          this.Manger[i] == this.username &&
          this.password == this.Mangerpass
        ) {
          console.log(true);
          this.username = this.Manger[i];
          this.password = '';
          this.routpath='manager'
          break;
        }
      }
    }
    
    
    if(this.username !=''){
      for(let i=0;i<this.Employee.length;i++){
        if (
          this.Employee[i] == this.username &&
          this.password == this.Employeepass
        ){
          console.log(true);
        
          this.username =  this.Employee[i];
          this.password = '';
          this.routpath='employee'
        }
        
      }
    }
   
  }
  constructor(private sharedataservice:ShareDataService){

  }
 
  getUsername(data:any) {
    this.username = data.target.value;
    this.sharedataservice.user=this.username;
    this.sharedataservice.setUsername(this.username)
  }
  getPass(event: any) {
    this.password = event.target.value;
  }

}

