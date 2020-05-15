import { Component } from '@angular/core';

@Component({
  template: '<input class="input-with-border" type="text" placeholder="enter text here">',
  selector: 'input-with-border'
})
class InputFactory { }

@Component({
  template: '<input class="primary-button" type="button" value="click here">',
  selector: 'primary-button'
})
class ButtonFactory { }

@Component({
  template: '<input class="search-box" type="search" placeholder="enter search keyword here">',
  selector: 'search-box'
})
class SearchboxFactory { }

export { InputFactory, ButtonFactory, SearchboxFactory }