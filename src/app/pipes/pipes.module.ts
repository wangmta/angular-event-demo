import { DurationPipe } from './duration.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DurationPipe],
  exports: [DurationPipe]
})
export class PipesModule {}
