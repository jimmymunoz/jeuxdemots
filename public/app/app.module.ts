import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Form }  from './app.component';
import { ListSearchResultDetailComponent }  from './list-search-result-detail-component';
import { WordService }    from './word.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    Form,
    ListSearchResultDetailComponent
  ],
  providers: [
    WordService,
  ],
  bootstrap: [ Form ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/