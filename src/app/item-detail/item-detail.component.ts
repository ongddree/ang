import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnChanges {
  constructor() {}

  @Input() item = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
