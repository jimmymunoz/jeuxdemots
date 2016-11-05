import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { SearchWordComponet }  from './search-word-component';
import { ListSearchResultDetailComponent }  from './list-search-result-detail-component';
import { SideBarMenuComponent }  from './side-bar-menu.component';
import { FilterListComponent }  from './filter-list.component';
import { WordService }    from './word.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2PageScrollModule } from 'ng2-page-scroll'; //https://www.npmjs.com/package/ng2-page-scroll#example-app
import { OrderBy } from './orderby';
import { PopoverModule }  from "ng2-popover";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2AutoCompleteModule,
    Ng2PageScrollModule,
    PopoverModule
  ],
  declarations: [
    SearchWordComponet,
    ListSearchResultDetailComponent,
    AppComponent,
    OrderBy,
    SideBarMenuComponent,
    FilterListComponent
  ],
  providers: [
    WordService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
