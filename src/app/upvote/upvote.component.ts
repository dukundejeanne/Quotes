import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
 
  @Input() upvote:number
  

  constructor() { }

  ngOnInit() {
  }

}