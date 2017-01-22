import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { ResultDetail } from './result-detail';
//import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
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
  inputs: ['listResult', 'word']
//  ,outputs: ['word'] 
  //,pipes: [ OrderBy ]
})


export class ListSearchResultDetailComponent {
  public myname : String;
  public word : String;
  public listResult : any;
  @Output("newWord") wordEvent: EventEmitter<string> = new EventEmitter();
 
  titre = "Result Details";
  orderByDir = "-";//Descending
  orderByField = "w";//weight
  
  public maxHeight: number = 35;
  public maxHeightDefinitions: number = 80;
  
  constructor(
    private wordService: WordService
  ){
    console.log("List result : " + this.listResult);
  }
  
  searchNewWord(newword: String){
    this.sendWord(newword);
  }

  keys(object: {}) {
    if(! object ){
        object = [];
    }
    return Object.keys(object);
  }

  getFontSizeByWeight(objRow: any, w: number){
    var distance = ((objRow.max_w - objRow.min_w) / 10);
    var size = Math.floor(w / distance);
    return "font_size-1-" + size;
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
    myDiv.className = ' byline definitions_text';
  }

  sendWord(word : string): void {
    this.wordEvent.emit(word);
  }

}
