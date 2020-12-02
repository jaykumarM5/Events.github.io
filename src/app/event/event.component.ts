import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventList = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEvent();
    this.dataService.getEventUpdateListener().subscribe(data => {
      this.eventList = data;
    })
  }

  onDelete(id) {
    this.dataService.delete(id);
  }

}
