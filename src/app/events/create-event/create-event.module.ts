import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const createEvRoute: Routes = [
  {
    path: '',
    component: CreateEventComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(createEvRoute)],
  declarations: [CreateEventComponent],
  providers: []
})
export class CreateEventModule {}
