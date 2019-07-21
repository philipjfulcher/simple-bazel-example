import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amiibo-card',
  templateUrl: './amiibo-card.component.html',
  styleUrls: ['./amiibo-card.component.css']
})
export class AmiiboCardComponent implements OnInit {
  @Input() label: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
