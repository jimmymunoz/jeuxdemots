import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { ResultDetail } from './result-detail';
import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
import { WordService }   from './word.service';

@Component({
  selector: 'side-bar-menu',
  templateUrl: 'app/html/side-bar-menu.html',
  styles: [`
    
  `],
  inputs: ['myname', 'listResult', 'word'],
  outputs: ['myevent'],
  pipes: [ OrderBy ]

})


export class SideBarMenuComponent {
  public myname : String;
  public word : String;
  public myevent : EventEmitter = new EventEmitter();
  public listResult : any;
 
  titre = "Result Details";
  orderByDir = "-";//Descending
  orderByField = "w";//weight
  
  constructor(
    private wordService: WordService
  ){
  
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

  sortListData(listData: any, sort_field: String, sort_dir: String){
    listData.sort_field = sort_field;
    listData.sort_dir = sort_dir;
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
