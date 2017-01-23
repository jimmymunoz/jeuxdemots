import { Component, Input } from '@angular/core';
//import { Word } from './words';
//import { WordService }   from './word.service';
import { WordService }   from './word.service';

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
      private wordService: WordService
    )
    {
      //console.log(history);
    }
    getSearchResult(word: string): void {
      this.wordService
        .searchResults(word)
        .then(
          //resultsParent => this.resultsParent = resultsParent
        );
         
    }
}

