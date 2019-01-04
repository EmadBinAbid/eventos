import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/Event/event.service';
import { Event } from '../interfaces/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  allEvents: Array<Event>;
  
  constructor(
    private router: Router,
    private eventService: EventService
  )
  {
    this.allEvents = this.eventService.getAllEvents();
  }

  ngOnInit() {
  }

  eventProfile(i)
  {
    this.eventService.setActiveEvent(this.allEvents[i]);
    console.log(i);
    this.router.navigateByUrl('/events/event-list/event-profile');
  }

}
