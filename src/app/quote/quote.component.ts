import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Life',1,'-r.h.Sin','you derserve the world even if it means giving it to yourself',new Date(2019,3,14)),
    new Quote('Life',2,'James','If you do not like someone story, write your oun',new Date(2019,3,14)),
    new Quote('Work',3,'Dolly Parton','Do not get so busy making a living that you forget to make a life',new Date(2019,3,14)),
    new Quote('Time',4,'Martin Luther King Jr.','The times is ways right to do what is right',new Date(2019,3,14)),
   
  ];
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  // completeQuote(isComplete, index){
  //   if(isComplete){
  //     this.quotes.splice(index,1);
  //   }
  // }
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete=confirm(`Are You sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.ComplteDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
 
  constructor() { }

  ngOnInit() {
  }

}
