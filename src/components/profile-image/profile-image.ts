import { Component } from '@angular/core';

/**
 * Generated class for the ProfileImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-image',
  templateUrl: 'profile-image.html'
})
export class ProfileImageComponent {
  noOfStars: Array<any> = [1, 2, 3, 4];

  constructor() {
    console.log('Hello ProfileImageComponent Component');
  }

}
