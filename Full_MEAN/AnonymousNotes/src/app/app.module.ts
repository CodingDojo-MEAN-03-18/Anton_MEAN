import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DataServiceService } from './data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
