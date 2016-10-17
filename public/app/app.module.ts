import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { SearchWordComponet }  from './search-word-component';
import { ListSearchResultDetailComponent }  from './list-search-result-detail-component';
import { WordService }    from './word.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { OrderBy } from './orderby';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2AutoCompleteModule
  ],
  declarations: [
    SearchWordComponet,
    ListSearchResultDetailComponent,
    AppComponent,
    OrderBy
  ],
  providers: [
    WordService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
