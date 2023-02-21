import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './events/components/calendar/calendar.component';
import {HttpClientModule} from "@angular/common/http";
import { EventAddComponent } from './events/components/event-add/event-add.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
