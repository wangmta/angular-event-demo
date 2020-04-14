import { Component, Input } from '@angular/core';

import { AdComponent } from './ad-container.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>

      {{ data.body }}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{ data.name }}</h4>

      <p>{{ data.bio }}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
