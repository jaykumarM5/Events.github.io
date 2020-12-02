import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  event: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.submit(this.event);
    this.event = '';
  }

}
