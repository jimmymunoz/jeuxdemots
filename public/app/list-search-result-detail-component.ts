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
  inputs: ['listResult', 'word'],
  //outputs: ['myevent'],
  pipes: [ OrderBy ]

})


export class ListSearchResultDetailComponent {
  public myname : String;
  public word : String;
  public myevent : EventEmitter = new EventEmitter();
  public listResult : any;
 
  titre = "Result Details";
  orderByDir = "-";//Descending
  orderByField = "w";//weight
  
  public text: string;

  public maxHeight: number = 35;
  public maxHeightDefinitions: number = 80;
  
  constructor(
    private wordService: WordService
  ){
    this.text = "Content React Native Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nisi tempore in deleniti magnam numquam odio, ut nesciunt eos est asperiores inventore dicta optio dolorem, omnis odit beatae animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nisi tempore in deleniti magnam numquam odio, ut nesciunt eos est asperiores inventore dicta optio dolorem";
    console.log("List result : " + this.listResult);
    console.log("text : " + this.text);
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

}
