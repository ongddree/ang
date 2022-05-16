import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  commit = '';
  imgUrl = 'https://avatars.githubusercontent.com/u/93420227?v=4';
  count = 0;
  name!: string;
  private _customerName: string = '';

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'holybang') {
      alert('hello holybang');
    }
  }

  incrementCommit() {
    this.commit = this.commit + '🌱';
  }

  incrementCounter() {
    this.count += 1;
  }
}
