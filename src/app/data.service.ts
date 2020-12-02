import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  event = [];
  eventupdate = new Subject();
  constructor(private http: HttpClient) { }

  submit(event: string) {
    console.log(event);
    const eventItem = { 
      event: event
    }
    
    this.http.post<any>("http://localhost:3000/event/", eventItem)
      .subscribe(data => {
        this.event.push(data);
        this.eventupdate.next([...this.event])
        console.log(data);
      })
  }

  getEvent() {
    this.http.get<any>("http://localhost:3000/event/").subscribe(data => {
      this.event = data;
      this.eventupdate.next([...this.event]);
    })
  }

  getEventUpdateListener(): any {
    return this.eventupdate.asObservable();
  }

  delete(id) {
    this.http.delete('http://localhost:3000/event/'+ id).subscribe(data => {
      const updatedEvent = this.event.filter(eventItem => eventItem._id !== id);
      this.event = updatedEvent;
      this.eventupdate.next([...this.event]);
    })
  }

}
