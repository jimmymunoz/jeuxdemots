import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Word } from './words';
import { ResultDetail } from './result-detail';
import { WordService }   from './word.service';
import { ListSearchResultDetailComponent }  from './list-search-result-detail-component';

//import { SearchWordComponet }   from './recherche-form';

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/layout.html',
  directives: [ListSearchResultDetailComponent]
})

export class AppComponent {
    public resultsParent : any;
    public myFriend : String;
    //myFriend = 'asasas';
    /*
     */
    wordService: WordService
    
    constructor(
        private wordService: WordService 
    ){ 
    	this.myFriend = 'Hello!!';
	    this.resultsParent  = {
	    	"data": []
	    };
    }

    fireMyEvent(evt){
    	//this.myevent.next();
    }
}
