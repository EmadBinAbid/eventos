import { Injectable } from '@angular/core';
import { Event } from '../../interfaces/event.interface';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  activeEvent: Event;
  allEvents: Array<Event>;
  allCategories: Array<Category>;

  constructor() { }

  setActiveEvent(event: Event)
  {
    this.activeEvent = event;
  }

  getActiveEvent() : Event
  {
    return this.activeEvent;
  }

  getAllEvents() : Event[]
  {
    // In real time, API call will me made here.
    this.allEvents = [
      {
        id: '0',
        title: 'First Event',
        description: 'Event was created ...'
      },
      {
        id: '1',
        title: 'Second Event',
        description: 'Event was created ...',
      },
      {
        id: '2',
        title: 'Third Event',
        description: 'Event was created ...',
      },
      {
        id: '3',
        title: 'Fourth Event',
        description: 'Event was created ...',
      },
      {
        id: '4',
        title: 'Fifth Event',
        description: 'Event was created ...',
      },
      {
        id: '5',
        title: 'Sixth Event',
        description: 'Event was created ...',
      }
    ];
    return this.allEvents;
  }

  getAllCategories() : Category[]
  {
    this.allCategories = [
      { name: 'Vendors'},
      { name: 'Pending tasks'},
      { name: 'To do tasks'},
    ];
    return this.allCategories;
  }
}
