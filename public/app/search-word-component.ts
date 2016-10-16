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
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `],
   providers : [WordService]
	//,templateUrl: 'app/search-word.html'
})
export class SearchWordComponet {
	title = 'Search a Word';
	word = "";
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
		this.wordService
		    .searchResults(this.word)
		    .then(
		    	resultsParent => this.resultsParent = resultsParent
		    );
	}

	
	leftAligned = (data: any) : SafeHtml => {
    	let html = `<div style="text-align:left">${data.value}</div>`;
    	return this._sanitizer.bypassSecurityTrustHtml(html);
  	}
  	completeCallBack(): void {
  		//console.log(this.word);
	   	this.getSearchResult();	
	}

	json(obj) {
		return JSON.stringify(obj);
	}
}

/*
 
npm install ng2-auto-complete --save
https://github.com/ng2-ui/ng2-auto-complete/blob/master/app/app.component.ts

 */