import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoginComponent } from "../login/login.component";


@Injectable({
    providedIn:"root"
})
export class ShareDataService{
    user:any;

    setUsername(data:any){
        this.user = data;
    }
    
  constructor(){

  }
}