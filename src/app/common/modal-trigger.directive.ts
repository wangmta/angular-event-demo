import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.element = ref.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', ev => {
      console.log(ev);
      // this.$('#simple-modal').modal({});
      this.$('#simple-modal').modal('show');
    });
  }
}
