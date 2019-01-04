import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  events: Array<{ title: String, description: String }>;
  
  constructor(private router: Router)
  {
    this.events = [
      {
        title: 'First Event',
        description: 'Event was created ...'
      },
      {
        title: 'Second Event',
        description: 'Event was created ...',
      },
      {
        title: 'Third Event',
        description: 'Event was created ...',
      },
      {
        title: 'Fourth Event',
        description: 'Event was created ...',
      },
      {
        title: 'Fifth Event',
        description: 'Event was created ...',
      },
      {
        title: 'Sixth Event',
        description: 'Event was created ...',
      }
    ];
  }

  ngOnInit() {
  }

  eventProfile(i)
  {
    console.log(i);
    this.router.navigateByUrl('/events/event-list/event-profile');
  }

}
