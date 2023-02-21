import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from "./events/components/calendar/calendar.component";
import {RouterModule, Routes} from "@angular/router";
import {EventAddComponent} from "./events/components/event-add/event-add.component";
import {EventDetailComponent} from "./events/components/event-detail/event-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: CalendarComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'events/add', component: EventAddComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
