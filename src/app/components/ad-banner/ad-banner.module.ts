import { NgModule } from '@angular/core';
import { HeroJobAdComponent, HeroProfileComponent } from './ad-content.component';
import { AdBannerComponent } from './ad-container.component';

@NgModule({
  declarations: [AdBannerComponent],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  exports: [AdBannerComponent]
})
export class AdBannerModule {}
