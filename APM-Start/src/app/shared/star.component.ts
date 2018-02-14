import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";



@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls:['./star.component.css']

})

export class StarComponent implements OnChanges {
    //Input can be given via the rating-property in the directive
    @Input() rating: number = 4;
    starWidth: number;

    //output type is always an event!
    @Output() ratingClicked : EventEmitter<string> = 
    new EventEmitter<string>();

    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick() {
        this.ratingClicked.emit(`The ${this.rating} rating was clicked!`);
    }

}