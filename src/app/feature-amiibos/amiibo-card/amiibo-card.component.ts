import { Component, OnInit, Input } from '@angular/core';
import { Amiibo } from '../../data-access/amiibo.class';

@Component({
  selector: 'app-amiibo-card',
  templateUrl: './amiibo-card.component.html',
  styleUrls: ['./amiibo-card.component.css']
})
export class AmiiboCardComponent implements OnInit {
  @Input() amiibo: Amiibo;
  constructor() { }

  ngOnInit() {
  }

}
