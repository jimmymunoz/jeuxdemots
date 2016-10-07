import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Word } from './words';
import { ResultDetail } from './result-detail';
import { WordService }   from './word.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/recherche.html'
 
})
export class Form {
	title = 'Mot a rechercher ';
	word = "bonjour";
	results = {};


	constructor(
	    private wordService: WordService,
	    //private router: Router
	) { }


	save(): void {
	   	this.getSearchResult();	
	}
	getSearchResult(): void {
		this.wordService
		    .searchResults()
		    .then(
		    	results => this.results = results
		    );
	}
}




/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/