import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
