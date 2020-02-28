import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSessionComponent } from './create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CreateSessionComponent],
  providers: [],
  exports: [CreateSessionComponent]
})
export class CreateSessionModule {}
