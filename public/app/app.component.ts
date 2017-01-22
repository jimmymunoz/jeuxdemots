import { ElementRef, AfterViewInit , Component } from '@angular/core';
import { ResultDetail } from './result-detail';
import { Historique }   from './history.component';
import { WordService }   from './word.service';
//import { ListSearchResultDetailComponent }  from './list-search-result-detail-component';
import { SideBarMenuComponent }  from './side-bar-menu.component';

declare var customJeuxDeMots: any

@Component({
  selector: 'my-app',
  templateUrl: 'html/layout.html'
//  ,directives: [ListSearchResultDetailComponent]
})

//declare var customJeuxDeMots: {documentOnLoad: Function, documentOnReady: Function};


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
