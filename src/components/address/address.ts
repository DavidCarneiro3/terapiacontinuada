import { Component, Input } from '@angular/core';

/**
 * Generated class for the AddressCompComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'address',
  templateUrl: 'address.html'
})
export class AddressComponent {

  @Input() public data: any[];

  text: string;

  constructor() {
    console.log('Hello AddressCompComponent Component');
    this.text = 'Hello World';
  }

}
