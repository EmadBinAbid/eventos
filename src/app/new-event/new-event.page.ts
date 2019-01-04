import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  newEventForm: FormGroup;
  eventTypes: Array<{ title: String, value: String }>;

  constructor()
  {
    this.newEventForm = new FormGroup(
      {
        eventName: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        eventType: new FormControl('' , Validators.required)
      }
    );

    this.eventTypes = [
      { title: 'Family', value: 'type0' },
      { title: 'Work',  value: 'type1' },
      { title: 'Personal',  value: 'type2' }
    ];
  }

  ngOnInit() {
  }

  newEventSubmit()
  {
    console.log(this.newEventForm.value);
  }

}
