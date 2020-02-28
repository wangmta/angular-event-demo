import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list.component';
import { CreateSessionModule } from '../create-session/create-session.module';
import { SharedComponentModule } from '../../shared-component/shared-component.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CreateSessionModule, SharedComponentModule, PipesModule],
  declarations: [SessionListComponent],
  providers: [],
  exports: [SessionListComponent]
})
export class SessionListModule {}
