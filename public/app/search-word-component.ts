import { Component, Input } from '@angular/core';
import { NgForm }    from '@angular/common';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
//import { Word } from './words';
import { ResultDetail } from './result-detail';
import { WordService }   from './word.service';
import { RuntimeCompiler} from '@angular/compiler'; // add this


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

   providers : [WordService,RuntimeCompiler]
})

export class SearchWordComponet {
	title = 'Search a Word';
	word = "";
	wordObjet = { id: "test", value: "test"};

	public  history: string[] = [];
	public  history1: any;
	public resultsParent : any;

	constructor(
	    private wordService: WordService,
		private _sanitizer: DomSanitizer,
	  	private runtimeCompiler: RuntimeCompiler// add this
	) {
    	var history = localStorage.getItem("history");
		var AppListJson = history != null ? JSON.parse(history) : [];
		this.history = AppListJson;
		
		this.runtimeCompiler.clearCache(); // add this
		this.resultsParent  = {
	    	"data": []
	    };
	 }

	getSearchResult(): void {
		localStorage.setItem("wordls", this.getWord());
		this.setHistory(this.getWord());
  		//console.log(this.wordObjet);
  		//console.log(this.word);
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
	      this.history.unshift(word);
	     
	      localStorage.setItem("history",JSON.stringify(this.history));
	    }  
	}
	getHistory(): any
	{
		
		//console.log(AppListJson.concat(this.history))
		return this.history;
		
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
  		console.log(this.history);

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