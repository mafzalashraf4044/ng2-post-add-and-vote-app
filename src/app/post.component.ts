import {Component, Input, Output} from '@angular/core'

@Component({
    selector: 'post',
    template: `
        <div class="container">

            <div class="pull-left ratting">
                {{ratting}} <br> POINTS
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <h1>{{title}}</h1>
                    <h2><a [href]="link">{{title}}</a></h2>

                    <div class="pull-right ratting-buttons">
                        <i class="glyphicon glyphicon-arrow-up" (click)="upVote()"></i>
                        <span>Upvote</span>

                        <i class="glyphicon glyphicon-arrow-down" (click)="downVote()"></i>
                        <span>Downvote</span>

                    </div>                    
                </div>
            </div>    

        </div>        
    `,
    styles: [`
        .ratting:first-line{font-size: 3em;}
        .ratting{width: 200px;
                height: 184px;
                padding: 10px;
                margin: 15px;
                margin-bottom: 0px;
                font-size: 2em;
                font-weight: bolder;
                text-align: center;
                background-color: lightgrey;}
        
        .ratting-buttons{margin-top: 35px;}
        i{color: blue;
          font-size: 1.5em;}
        
    `]
})

export class Post{
    @Input() title: string = "Angular2 Modules";
    @Input() link: string = "http://www.dodear.com/index.php/en/home";
    ratting: number = 0;

    upVote(){
        this.ratting++;
    }

    downVote(){
        this.ratting--;
    }


}