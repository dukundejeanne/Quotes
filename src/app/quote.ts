export class Quote {
   
    showDescription:boolean;
    showAuthor:boolean;
    showUpvote:number;
    showDownVote:number;
    constructor(public name:string, public author:string, public description:string, public completeDate:Date,public upvote:number,public downvote:number){
            this.showDescription=false;
            this.showAuthor=false;
            this.showUpvote= upvote || 0;
            this.showDownVote=downvote || 0;
    }
  
    
}
