import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../shared/events.service";
import {Event} from "../../shared/event";
import {TYPES} from "../../shared/mock-types";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  events: Event[] = [];

  eventsFiltre: Event[] = [];

  types = TYPES;

  typeSelect!: string;
  min: string= "00:00";
  max: string= "23:59";

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getAll().subscribe(
      events => {
        this.events = events
        this.eventsFiltre = events
    });
  }

  deleteEvent(event: Event): void {
    this.events = this.events.filter(e => e !== event);
    this.eventsFiltre = this.eventsFiltre.filter(e => e !== event);

    this.eventsService.deleteEvent(event.id).subscribe(
      {
        next: (value: Event) => console.log(value),
        error: (error: string) => console.log(error),
        complete: () => console.log("fini")
      }
    );
  }

  triByType(): void {
    this.eventsFiltre.sort(
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

  triByTime(): void {
    this.eventsFiltre.sort(
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

  filterbyType(): void {
    let eventTemp: Event[];

    if (this.typeSelect != undefined) {
      this.eventsFiltre = [];
      eventTemp = this.events.filter(item => item.type === this.typeSelect);
    } else {
      eventTemp = this.events;
    }

    //loin d'êtres parfaits
    eventTemp = eventTemp.filter(item => this.time(item.time) >= this.time(this.min));
    eventTemp = eventTemp.filter(item => this.time(item.time) <= this.time(this.max));

    this.eventsFiltre = eventTemp;
  }

  private time(time: string): number {
    const words: string[] = time.split(':');

    const hours: number = parseInt(words[0])*60;
    const min: number = parseInt(words[1]);

    return hours+min
  }
}
