import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { ResultDetail } from './result-detail';
import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
import { WordService }   from './word.service';

@Component({
  selector: 'list-search-result-detail-component',
  templateUrl: 'app/html/list_definition.html',
  styles: [`
    left-menu {
      display: block; border: 1px solid #ccc;
    }
  `],
  inputs: ['myname', 'listResult', 'word'],
  outputs: ['myevent'],
  pipes: [ OrderBy ]

})
/*
 <div class="">
      <div class="row">
        <div class="col-md-3 left-menu">
          <div *ngFor="let key of keys(listResult.data)">
             <input type="checkbox" name="{{key}}" /> <span>{{key}}</span>
          </div>
        </div>
        <div class="col-md-9">
          <ul>
            <li *ngFor="let key of keys(listResult.data)">
               <b>{{key}}</b>
               <div>
                 {{listResult.data[key] | json}}
               </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
 */

//{ "eid": "46164", "typeNode": "n_term", "t": "1", "w": "52", "name": "carnivores", "nf": "" }

export class ListSearchResultDetailComponent {
  public myname : String;
  public word : String;
  public myevent : EventEmitter = new EventEmitter();
  public listResult : any;
  //@Input()
  //myname: String;
  //@Input()
  //listResult : listResult;
  titre = "Result Details";
  orderByDir = "-";//Descending
  orderByField = "w";//weight
  
  constructor(
    private wordService: WordService
  ){

    console.log("List result : " + this.listResult);
  }
  
  searchNewWord(newword: String){
    console.log(this.word);
    this.word = newword;
    console.log(this.word);
    this.wordService
        .searchResults(newword)
        .then(
          listResult => this.listResult = listResult
        );
  }

  keys(object: {}) {
    if(! object ){
        object = [];
    }
    return Object.keys(object);
  }

  mouseEnterDefinition(id : string){
    let myDiv = document.getElementById("rafinement_semantique_" + id);
    myDiv.className += ' reamark_text';
  }

  mouseLeaveDefinition(id : string){
    let myDiv = document.getElementById("rafinement_semantique_" + id);
    myDiv.className = 'btn-link';
  }
}
