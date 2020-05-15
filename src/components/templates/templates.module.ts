import { NgModule } from '@angular/core';
import { InputFactory, ButtonFactory, SearchboxFactory } from './templates';

@NgModule({
  declarations: [
    InputFactory,
    ButtonFactory,
    SearchboxFactory
  ],
  exports: [
    InputFactory,
    ButtonFactory,
    SearchboxFactory
  ]
})
export class TemplatesModule { }
