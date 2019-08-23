import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-link',
  templateUrl: './vote-link.component.html',
  styleUrls: ['./vote-link.component.css']
})
export class VoteLinkComponent implements OnInit {
  @Output() upVote=new EventEmitter()
  @Output() downVote=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  upVoteQuote=()=>{
    this.upVote.emit()
  }
  downVoteQuote=()=>{
    this.downVote.emit()
  }

}
