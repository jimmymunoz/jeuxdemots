import { Component, Input} from '@angular/core';
//import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
//import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover

@Component({
  selector: 'filter-list-component',
  templateUrl: 'app/html/filter-list-component.html',
  inputs: ['listResult']
})


export class FilterListComponent {
  public listResult : any;
 
  constructor(
  ){
  
  }
  keys(object: {}) {
    if(! object ){
        object = [];
    }
    return Object.keys(object);
  }
}
