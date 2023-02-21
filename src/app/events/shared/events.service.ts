import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url:string = "http://localhost:3000/events"

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<any>(this.url, event, this.httpOptions);
  }

  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<any>(this.url+"/"+id);
  }
  getEvent(id: number): Observable<Event> {
    return this.http.get<any>(this.url+"/"+id);
  }
  putEvent(event: Event): Observable<Event> {
    return this.http.put<any>(this.url+"/"+event.id, event);
  }
}
