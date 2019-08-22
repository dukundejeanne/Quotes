import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Life','-r.h.Sin','you derserve the world even if it means giving it to yourself',new Date(2019,3,14)),
    new Quote('Life','James','If you do not like someone story, write your oun',new Date(2019,3,14)),
    new Quote('Work','Dolly Parton','Do not get so busy making a living that you forget to make a life',new Date(2019,3,14)),
    new Quote('Time','Martin Luther King Jr.','The times is ways right to do what is right',new Date(2019,3,14)),
   
  ];
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

}
