import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
  Type,
  Directive,
  ViewContainerRef
} from '@angular/core';

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}

export interface AdComponent {
  data: any;
}

@Directive({
  selector: '[ad-host]'
})
export class AdHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <div #adHost></div>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  // @ViewChild(AdHostDirective, { read: AdHostDirective }) adHost: AdHostDirective;
  @ViewChild('adHost', { read: ViewContainerRef }) adHost: ViewContainerRef;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    // define the view wrapper ref of the ad-host
    // for angular 9
    // const viewContainerRef = this.adHost.viewContainerRef;
    // for angular 6
    const viewContainerRef = this.adHost;
    // remove all nodes from this view wrapper
    viewContainerRef.clear();

    // insert content into view wrapper
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
