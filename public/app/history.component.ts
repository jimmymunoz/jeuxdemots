import { Component, Input } from '@angular/core';
//import { Word } from './words';
//import { WordService }   from './word.service';


@Component({
  selector: 'historique',
  templateUrl: 'html/history.component.html',
  inputs: ['history'],
  //providers : [WordService]
})

export class Historique{
    public history:string[];
    
    constructor(
    )
    {
      //console.log(history);
    	
    }
}

