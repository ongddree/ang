import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = 'commit';

  change() {
    this.data = this.data + '🌱';
  }
}
