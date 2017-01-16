import { Component, Input,OnInit} from '@angular/core';
//import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
//import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
import { Historique }   from './history.component';
//import { COMPILER_PROVIDERS } from "@angular/compiler";
//import { RuntimeCompiler} from '@angular/compiler'; // add this


@Component({
  selector: 'side-bar-menu',
  templateUrl: 'app/html/side-bar-menu.html',
  styles: [`
    
  `],
  inputs: ['listResult',  'history', 'word'],
  directives: [Historique],

})


export class SideBarMenuComponent implements OnInit{
  public word : String;
  public listResult : any;
  public visibility:string;
   
   constructor(
    )
    {

         console.log(history);
       
        
    }
    ngOnInit(){
       this.visibility = "hide";
    }
    getVisibilityHistory(nbr:number):string{
        if(nbr == 0) {
           this.visibility ="hide";
        }
        else 
            this.visibility ="block"
        return this.visibility;
    }
    getVisibilityShowHide(obj:any):string{
        if(Object.keys(obj).length == 0) {
           this.visibility ="hide";
        }
        else 
            this.visibility ="block"
        return this.visibility;
    }
}
