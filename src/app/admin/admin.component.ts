import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {
 
  private url: string = 'http://localhost:3000/empolyee';
    employeedata:any;
 ngOnInit(): void {
   fetch(this.url).then((response) => response.json()).then(res=>{this.employeedata=res

  })
  
}

}
