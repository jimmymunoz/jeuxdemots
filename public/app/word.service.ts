import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ResultDetail } from './result-detail';
import { Observable } from 'rxjs/Observable';
import { Historique }   from './history.component';


@Injectable()
export class WordService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private searchUrl = 'csv_example.json';  // URL to web api
  private searchUrl = 'application/index/search';  // URL to web api
  private history: string[] = [];
  private findUrl: string = "application/index/autocompleteword";
  private baseUrl: string = "/";

  constructor(private http: Http) {
     if(false){ //Jimmy (Cordova -> Remote) true Remote, false: Local
       this.baseUrl = "http://46.101.40.23/jeuxdemots/public/";
     } 
   }



  searchResults(word: string):  Promise<ResultDetail[]> {
    return this.http.get(`${this.baseUrl}${this.searchUrl}?word=${word}`)
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

  findWords = (startsWith: string): Observable<any[]> => {
      return this.http.get(`${this.baseUrl}${this.findUrl}?word=${startsWith}`)
        //return this._http.get(`${this.marvelBase}characters?nameStartsWith=${startsWith}&apikey=${this.marvelPublicKey}`)
        .map(h => h.json())
        .catch(e => console.error(e));
    } 

}
