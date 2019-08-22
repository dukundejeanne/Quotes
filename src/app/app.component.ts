import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    // new Quote('Life','you derserve the world even if it means giving it to yourself','-r.h.Sin'),
    // new Quote('Life','If you do not like someone story, write your oun','James'),
    // new Quote('Work','Do not get so busy making a living that you forget to make a life','Dolly Parton'),
    // new Quote('Time','The times is ways right to do what is right','Martin Luther King Jr.'),
   
  ];


  
}