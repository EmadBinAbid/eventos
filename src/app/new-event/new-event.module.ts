import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewEventPage } from './new-event.page';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: NewEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewEventPage]
})
export class NewEventPageModule {}
