import { Component, Input } from '@angular/core';
//import { Word } from './words';
import {SearchWordComponet}   from './search-word-component';
//import { WordService }   from './word.service';


@Component({
  selector: 'historique',
  templateUrl: 'app/html/history.component.html',
  inputs: ['history'],
  //providers : [WordService]
})

export class Historique{
    public history:string[];
    public word:SearchWordComponet;
    //historys = ['chat','Bonjour','salut'];

    constructor(
    )
    {
      console.log(history.length);
    	
    }

   
    Affiche(key:SearchWordComponet)
      {
      this.word = key;
      this.word.getSearchResult();

      console.log(key);
      }

    
}

