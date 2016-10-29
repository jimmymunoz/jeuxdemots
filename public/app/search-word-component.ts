import { Component, Input } from '@angular/core';
import { NgForm }    from '@angular/common';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
//import { Word } from './words';
import { ResultDetail } from './result-detail';
import { WordService }   from './word.service';




@Component({
  selector: 'search-word-component',
  templateUrl: 'app/html/search-word.html',
  styles: [`
    ng2-auto-complete {
      display: inline-block; position: relative; width: 100% !important;
    }
    ng2-auto-complete input {
      display: inline-block; position: relative; width: 100%;
    }
  `],
   providers : [WordService]
	//,templateUrl: 'app/search-word.html'
})

export class SearchWordComponet {
	title = 'Search a Word';
	word = "";
	wordObjet = { id: "test", value: "test"};
	public resultsParent : any;

	constructor(
	    private wordService: WordService,
		private _sanitizer: DomSanitizer
	) {
		this.resultsParent  = {
	    	"data": []
	    };
	 }

	getSearchResult(): void {
  		//console.log(this.wordObjet);
  		//console.log(this.word);
		this.wordService
		    .searchResults(this.word)
		    .then(
		    	resultsParent => this.resultsParent = resultsParent
		    );
	}

	clearResults(): void {
		this.resultsParent  = {
	    	"data": []
	    };
	}

	
	leftAligned = (data: any) : SafeHtml => {
    	let html = `<div style="text-align:left">${data.value}</div>`;
    	return this._sanitizer.bypassSecurityTrustHtml(html);
  	}
  	completeCallBack(event): void {
  		//console.log(event);
  		this.clearResults();
  		this.word = event.value;
  		console.log(this.word);
	   	//this.getSearchResult();	
	}

	json(obj) {
		return JSON.stringify(obj);
	}
}

/*
 
npm install ng2-auto-complete --save
https://github.com/ng2-ui/ng2-auto-complete/blob/master/app/app.component.ts

 */