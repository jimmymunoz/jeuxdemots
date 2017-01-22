//https://github.com/oferh/ng2-completer/blob/master/demo/custom-data.ts
import {Http, Response} from "@angular/http";
import {Subject} from "rxjs/Subject";

import { CompleterData, CompleterItem } from 'ng2-completer';

export class CompleterSearchWord extends Subject<CompleterItem[]> implements CompleterData {
   constructor(private http: Http, private url: String) {
      super();
   }
   public search(term: string): void {
        this.http.get(this.url + term + "")
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                // dat
                let data = res.json();
                let matches: CompleterItem[] = data.data.map((item: any) => {
                    return {
                        title: item.value
                    }
                });
                this.next(matches);
            })
            .subscribe();
    }
    public cancel() {
       // Handle cancel
    }
}