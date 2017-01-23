import { ElementRef, AfterViewInit , Component } from '@angular/core';
import { ResultDetail } from './result-detail';
import { Historique }   from './history.component';
import { WordService }   from './word.service';
import { SideBarMenuComponent }  from './side-bar-menu.component';

declare var customJeuxDeMots: any

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/layout.html'
})

export class AppComponent implements AfterViewInit {
    public resultsParent : any;
    public myFriend : String;

    constructor(
        private wordService: WordService 
    ){ 
    	this.myFriend = 'Hello!!';
	    this.resultsParent  = {
	    	"data": []
	    };
    }
    ngAfterViewInit() {
        //Jimmy: Call Jquery Functions of another file 
        //https://www.thepolyglotdeveloper.com/2016/01/include-external-javascript-libraries-in-an-angular-2-typescript-project/
        customJeuxDeMots.initJqueryBoostrap(); 
    }
}
