import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmiiboType } from '../../shared/data-access/amiibo.class';
import { AmiiboTypesContainerFacade } from './amiibo-types-container.facade';

@Component({
  selector: 'app-amiibo-types-container',
  templateUrl: './amiibo-types-container.component.html',
  styleUrls: ['./amiibo-types-container.component.css']
})
export class AmiiboTypesContainerComponent implements OnInit {
  amiiboTypes$: Observable<AmiiboType[]>;

  constructor(private facade: AmiiboTypesContainerFacade) {
    this.amiiboTypes$ = this.facade.amiiboTypes$;
  }

  ngOnInit() {
  }

}
