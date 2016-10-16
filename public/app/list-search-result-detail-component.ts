import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResultDetail } from './result-detail';


@Component({
  selector: 'list-search-result-detail-component',
  templateUrl: 'app/html/list_definition.html',
  styles: [`
    left-menu {
      display: block; border: 1px solid #ccc;
    }
  `],
    inputs: ['myname', 'listResult'],
    outputs: ['myevent']
  
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
export class ListSearchResultDetailComponent {
  public myname : String;
  public myevent : EventEmitter = new EventEmitter();
  public listResult : any;
  //@Input()
  //myname: String;
  //@Input()
  //listResult : listResult;
  titre = "Result Details";
  
  constructor(){
    console.log("List result : " + this.listResult);
    console.log("myname : " + this.myname);
  }
  
  keys(object: {}) {
    if(! object ){
        object = [];
    }
    return Object.keys(object);
  }
}
