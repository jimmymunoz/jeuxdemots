import { Component, Input } from '@angular/core';
import { ResultDetail } from './result-detail';


const WordList : ResultDetail[] =  [
/*
  {definition: 'sqsqhsqsg'},
  {definition: 'sdds'},
  {definition: 'rtrt'},
  {definition: 'rtrt'},
  {definition: 'rtrt'},
  {definition: '131'}
*/
];

console.log(WordList);

@Component({
  selector: 'list-search-result-detail-component',
  
  //templateUrl: 'app/list_definition.html'
  template: `<ul>
    {{titre}}
    {{listResult.message}}
    <li *ngFor="let result of listResult.data">
       {{result.message}}
      </li>
    </ul>
  `


  
})
//<list-definition [WordList]="selectedResultDetail"></list-definition>
export class ListSearchResultDetailComponent {
  //@Input()
  titre = "Result Details";
  //listResult = WordList;
  @Input()
  listResult : listResult;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/