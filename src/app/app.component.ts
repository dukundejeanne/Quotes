import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = 'Every thing is possible';
  quotes:string[];
  constructor(){
       this.quotes=['Every Thing is Possible','If you do not like someone story, write your oun']
  }
 

  
}