export class Quote {
   
    showDescription:boolean;
    showAuthor:boolean;
    showUpvote:number;
    showDownVote:number;
    
    constructor(public name:string, public author:string, public description:string, public completeDate:Date,public upvote:number,public downvote:number){
        
        this.showDescription=false;
            this.showAuthor=false;
            this.showUpvote= 0;
            this.showDownVote=0;
    }
  
    
}
