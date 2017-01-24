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
  private useRemote: boolean = false;//Jimmy (Cordova -> Remote) true Remote, false: Local

  constructor(private http: Http) {
     if(this.useRemote){ 
       this.baseUrl = "http://46.101.40.23/jeuxdemots/public/";
     } 
   }

   public getSearchUrl(): string{
     return `${this.baseUrl}${this.searchUrl}`;
   }

   public getfindWordsUrl(): string{
     return `${this.baseUrl}${this.findUrl}`;
   }

  searchResults(word: string):  Promise<ResultDetail[]> {
    return this.http.get(this.getSearchUrl() + `?word=${word}`)
       .toPromise()
       .then(
          response => this.setDefaultValuesList(response.json()) as ResultDetail[]
        )
       .catch(this.handleError);
  }

  setDefaultValuesList(listResult: {}) {
    for(var key in listResult['data']){
      var isCollapsable = (listResult['data'][key].data.length > 15) ? true : false;//12 words
      if( key == 'definitions' ){
        isCollapsable = (listResult['data'][key].data.length > 3) ? true : false;//2 definitions
      }
      listResult['data'][key]['isCollapsed'] = isCollapsable;
      listResult['data'][key]['isCollapsable'] = isCollapsable;
      
      listResult['data'][key]['sort_field'] = "w";// w -> weight, name -> name 
      listResult['data'][key]['sort_dir'] = "-";// + -> asc, - -> desc
      listResult['data'][key]['visible'] = 1;// 1 - 0
    }
    return listResult;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  findWords = (startsWith: string): Observable<any[]> => {
      return this.http.get(this.getfindWordsUrl() + `?word=${startsWith}`)
        .map(h => h.json());
    } 

}
