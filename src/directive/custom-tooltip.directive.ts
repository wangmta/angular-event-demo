import { Directive, Input, HostListener, Component, OnInit, ElementRef } from '@angular/core';
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'my-tooltip',
  template: `
    {{ innerText }}
  `
})
export class CustomTooltipComponent {
  @Input() innerText = '';
}

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective implements OnInit {
  @Input('appCustomTooltip') text = '';

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      // Create position attached to the elementRef
      .flexibleConnectedTo(this.elRef)
      // Describe how to connect overlay to the elementRef
      // Means, attach overlay's center bottom point to the
      // top center point of the elementRef.
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        }
      ]);
    //connect postion strategy
    this.overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
    // shorthand -- this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') show() {
    // create tooltip portal
    const portal = new ComponentPortal(CustomTooltipComponent);
    // attach tooltip portal to overlay
    const tooltipRef = this.overlayRef.attach(portal);
    // Pass content to tooltip component instance
    tooltipRef.instance.innerText = this.text;
  }

  @HostListener('mouseout') hide() {
    this.overlayRef.detach();
  }
}
