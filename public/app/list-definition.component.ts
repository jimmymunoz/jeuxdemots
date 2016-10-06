import { Component } from '@angular/core';
import { Definition } from './definition';


const WordList : Definition[] =  [
  {definition: 'sqsqhsqsg'},
  {definition: 'sdds'},
  {definition: 'rtrt'},
  {definition: 'rtrt'},
  {definition: 'rtrt'},
  {definition: '131'}
];

console.log(WordList);

@Component({
  selector: 'list-definition-component',
  //templateUrl: 'app/list_definition.html'
  template: `<ul>
    {{titre}}qsqs
    <li *ngFor="let definition of wordlist">
       {{definition.definition}}
      </li>
    </ul>
  `


  
})
//<list-definition [WordList]="selectedDefinition"></list-definition>
export class ListDefinitionComponent {
  //@Input()
  titre = "Definitions";
  wordlist = WordList;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/