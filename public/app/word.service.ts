import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { word } from './word';
import { ResultDetail } from './result-detail';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class WordService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private searchUrl = 'csv_example.json';  // URL to web api
  private searchUrl = 'application/index/search';  // URL to web api

  constructor(private http: Http) { }

  searchResults(word: string):  Promise<ResultDetail[]> {
    return this.http.get(`${this.searchUrl}?word=${word}`)
       .toPromise()
       .then(
          response => response.json() as ResultDetail[]
        )
       .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //findUrl: string = "http://jeuxdemots.localhost/application/index/autocompleteword";
  findUrl: string = "/application/index/autocompleteword";
  
  
  findWords = (startsWith: string): Observable<any[]> => {
      return this.http.get(`${this.findUrl}?word=${startsWith}`)
        //return this._http.get(`${this.marvelBase}characters?nameStartsWith=${startsWith}&apikey=${this.marvelPublicKey}`)
        .map(h => h.json())
        .catch(e => console.error(e));
    } 

}
