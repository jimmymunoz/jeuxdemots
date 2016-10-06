import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { word } from './word';
import { ResultDetail } from './result-detail';


@Injectable()
export class WordService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private searchUrl = 'csv_example.json';  // URL to web api

  constructor(private http: Http) { }

  searchResults(): Promise<ResultDetail[]> {
    return this.http.get(this.searchUrl)
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

}
