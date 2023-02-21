import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './events/components/calendar/calendar.component';
import {HttpClientModule} from "@angular/common/http";
import { EventAddComponent } from './events/components/event-add/event-add.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { EventDetailComponent } from './events/components/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventAddComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
