import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GifListComponent } from './gif-list/gif-list.component';
import {GifService} from './shared/gif.service'
@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
