import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    ShowQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
