import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = 'commit';
  imgUrl = 'https://avatars.githubusercontent.com/u/93420227?v=4';
  count = 0;
  name!: string;

  change() {
    this.data = this.data + '🌱';
  }

  incrementCounter() {
    this.count += 1;
  }
}
