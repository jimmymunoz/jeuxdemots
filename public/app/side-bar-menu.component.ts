import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { ResultDetail } from './result-detail';
import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
import { WordService }   from './word.service';
import { Historique }   from './history.component';
import {Component, View, bootstrap, NgFor, NgIf} from '@angular/core';

@Component({
  selector: 'side-bar-menu',
  templateUrl: 'app/html/side-bar-menu.html',
  directives: [Historique],
  styles: [`
    
  `],
  inputs: ['listResult', 'history','word'],
  outputs: ['myevent'],
  pipes: [ OrderBy ]

})


export class SideBarMenuComponent {
  public myname : String;
  public history: any;
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
 
}
