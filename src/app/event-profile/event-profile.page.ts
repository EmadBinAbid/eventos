import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/Event/event.service';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-event-profile',
  templateUrl: './event-profile.page.html',
  styleUrls: ['./event-profile.page.scss'],
})
export class EventProfilePage implements OnInit {

  eventName: String;
  allCategories: Array<Category>;

  constructor(
    private eventService: EventService
  )
  {
    this.eventName = this.eventService.getActiveEvent().title;
    this.allCategories = this.eventService.getAllCategories();
  }

  ngOnInit() {
  }

}
