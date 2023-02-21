import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../../shared/event";
import {EventsService} from "../../shared/events.service";
import {TYPES} from "../../shared/mock-types";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit{

  event!: Event;
  types = TYPES;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.eventService.getEvent(id).subscribe(e => this.event = e);
  }


  onSubmit() {
    this.eventService.putEvent(this.event).subscribe(
      {
        next: (value: Event) => console.log(value),
        error: (error: string) => console.log(error),
        complete: () =>  this.router.navigate(['/'])
      }
    )
  }
}
