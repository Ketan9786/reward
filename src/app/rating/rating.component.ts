import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  rating :number=0
  ratingChanged(event:any){
    this.rating=event.target.value;
    console.log(this.rating)
  }
  
}
