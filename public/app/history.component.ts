import { Component, Input } from '@angular/core';
//import { Word } from './words';
//import { WordService }   from './word.service';


@Component({
  selector: 'historique',
  templateUrl: 'app/html/history.component.html',
  inputs: ['history'],
  //providers : [WordService]
})

export class Historique{
    public history:string[];
    //historys = ['chat','Bonjour','salut'];

    constructor(
    )
    {
      console.log(history);
    	
    }
}

