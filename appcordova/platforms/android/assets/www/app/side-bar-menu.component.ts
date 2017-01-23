import { Component, Input} from '@angular/core';
//import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
//import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
//import { Historique }   from './history.component';

@Component({
  selector: 'side-bar-menu',
  templateUrl: 'app/html/side-bar-menu.html',
  styles: [`
    
  `],
  inputs: ['listResult',  'history', 'word']
//  ,directives: [Historique]
})


export class SideBarMenuComponent {
  public word : string;
  public listResult : any;
 
  constructor(
  ){
  
  }
  
}
