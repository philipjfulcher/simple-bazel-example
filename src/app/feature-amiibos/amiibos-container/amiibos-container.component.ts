import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Amiibo } from '../../shared/data-access/amiibo.class';
import { AmiibosContainerFacade } from './amiibos-container.facade';

@Component({
  selector: 'app-amiibos-container',
  templateUrl: './amiibos-container.component.html',
  styleUrls: ['./amiibos-container.component.css']
})
export class AmiibosContainerComponent implements OnInit {
  amiibos$: Observable<Amiibo[]>;

  constructor(private facade: AmiibosContainerFacade) {
    this.amiibos$ = this.facade.amiibos$;
  }

  ngOnInit() {
  }

}
