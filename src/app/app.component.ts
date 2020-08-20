import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  // OR
  // constructor() {
  //   this.password = '';
  // }

  //methods:
  onButtonClick() {
    // console.log('Button clicked');
    this.password = 'My Password';
  }
}
