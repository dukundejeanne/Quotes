import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {
  @Input() downvote:number

  constructor() { }

  ngOnInit() {
  }

}
