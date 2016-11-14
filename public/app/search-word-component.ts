import { Component, Input } from '@angular/core';
import { Http, Response } from "@angular/http";
import { NgForm }    from '@angular/common';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
//import { Word } from './words';
import { CompleterService, CompleterData } from 'ng2-completer';
import { CompleterSearchWord } from "./completer-search-word";
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
})

export class SearchWordComponet {
	title = 'Search a Word';
	word = "";
	wordObjet = { id: "test", value: "test"};
	public  history: string[] = [];
	public resultsParent : any;
	private dataService: CompleterSearchWord;
	//private dataService: CompleterData;

	constructor(
	    private wordService: WordService,
		private _sanitizer: DomSanitizer,
		private completerService: CompleterService,
		private http: Http
	) {
		this.resultsParent  = {
	    	"data": []
	    };
	    this.dataService = new CompleterSearchWord(http, wordService.getfindWordsUrl() + '?word=');
	    //this.dataService = completerService.remote(wordService.getfindWordsUrl() + '?word=', 'data', 'value');
	 }

	getSearchResult(): void {
		this.setHistory(this.getWord());
  		this.wordService
		    .searchResults(this.word)
		    .then(
		    	resultsParent => this.resultsParent = resultsParent
		    );
		   
	}

	getWord():any
	{
		return this.word;
	}

	setHistory(word: string)
	{
	    if (this.history.indexOf(word) === -1) 
	    {
	    	this.history.push(word);
	    }  
		
	}
	getHistory(word: string): any
	{
		return this.history;
	}


	clearResults(): void {
		this.resultsParent  = {
	    	"data": []
	    };
	}

	typingEvent(event: any){
	    //console.log("event:" + event.target.value);
	    if( event.target.value != this.word ){
	    	this.clearResults();
	    }
	    this.word = event.target.value;
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