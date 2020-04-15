import { NgModule } from '@angular/core';
import { HeroJobAdComponent, HeroProfileComponent } from './ad-content.component';
import { AdBannerComponent } from './ad-container.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [AdBannerComponent, HeroJobAdComponent, HeroProfileComponent],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  exports: [AdBannerComponent, HeroJobAdComponent, HeroProfileComponent],
  providers: [AdService]
})
export class AdBannerModule {}
