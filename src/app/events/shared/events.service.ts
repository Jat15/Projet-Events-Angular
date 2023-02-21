import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url:string = "http://localhost:3000/events"

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Event[]> {
    console.log("lapin")
    return this.http.get<Event[]>(this.url);
  }


}
