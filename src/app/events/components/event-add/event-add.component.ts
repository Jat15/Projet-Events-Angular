import { Component } from '@angular/core';
import {Event} from "../../shared/event";
import {EventsService} from "../../shared/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  types = ['Routine', 'Repas', 'Travail', 'Loisir'];


  model: Event = {} as Event;


  constructor(
    private eventService: EventsService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.eventService.addEvent(this.model).subscribe(
      {
        next: (value: Event) => console.log(value),
        error: (error: string) => console.log(error),
        complete: () =>  this.router.navigate(['/'])
      }
    );
  }
}
