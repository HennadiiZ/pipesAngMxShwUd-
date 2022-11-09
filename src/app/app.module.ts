import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterMyPipe } from './filter-my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterMyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 242. Using Pipes
// 243. Parametrizing Pipes
// 245. Chaining Multiple Pipes

// 246. Creating a Custom Pipe
// 247. Parametrizing a Custom Pipe

// 248. Example: Creating a Filter Pipe
