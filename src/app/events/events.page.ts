import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  options: Array<{ label: String, url: String, icon: String }>;

  constructor() 
  {
    this.options = [
      {
        label: 'View Existing Events',
        url: '/events/event-list',
        icon: 'list'
      },
      {
        label: 'Create New Event',
        url: '/events/new-event',
        icon: 'add'
      }
    ];
  }

  ngOnInit() {
  }

}
