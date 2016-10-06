import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Words } from './words';




@Component({
  selector: 'my-app',
  templateUrl: 'app/recherche.html'
 
})
export class Form {
	title = 'Mot a rechercher ';
	word = "";

	save(): void {
	   console.log(this.word);
	}
}




/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/