import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../shared/events.service";
import {Event} from "../../shared/event";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  events: Event[] = [];

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getAll().subscribe(events => this.events = events);
  }

  deleteEvent(event: Event): void {
    this.events = this.events.filter(e => e !== event);
    this.eventsService.deleteEvent(event.id).subscribe(
      {
        next: (value: Event) => console.log(value),
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")
      }
    );
  }

  filterByType(): void {
    this.events.sort(
      function compareFn(a, b) {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }

        return 0;
      }
    )
  }

  filterByTime(): void {
    this.events.sort(
      function compareFn(a, b) {
        if (a.time < b.time) {
          return -1;
        }
        if (a.time > b.time) {
          return 1;
        }

        return 0;

      })
  }


}
