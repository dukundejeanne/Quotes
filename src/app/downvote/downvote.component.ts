import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {
  @Input() downvote:number
  
  @Output() isComplete =new EventEmitter<number>();
  downvoteQuote(complete:number){
    this.isComplete.emit(complete);
  }
 
  //  quoteComplete(complete:boolean){
  //    this.isComplete.emit(complete);
  //  }
  
  

  constructor() { }

  ngOnInit() {
  }

}
