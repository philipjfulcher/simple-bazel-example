import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, first, map } from 'rxjs/operators';
import { AmiiboAPIService } from '../../shared/data-access/amiibo-api.service';
import { AmiiboType } from '../../shared/data-access/amiibo.class';

export interface AmiiboTypesState {
  amiiboTypes: AmiiboType[];
}

const initialState: AmiiboTypesState = {
  amiiboTypes: []
};

@Injectable({
  providedIn: 'root'
})
export class AmiiboTypesContainerFacade {
  private store = new BehaviorSubject<AmiiboTypesState>(initialState);
  private state$ = this.store.asObservable();

  amiiboTypes$: Observable<AmiiboType[]> = this.state$.pipe(
    map(state => state.amiiboTypes),
    distinctUntilChanged()
  );

  constructor(private amiibosAPI: AmiiboAPIService) {
    this.getAllAmiiboTypes();
  }

  private updateState(state: AmiiboTypesState) {
    this.store.next(state);
  }

  private getAllAmiiboTypes() {
    this.amiibosAPI.amiiboTypes$.pipe(
      first()
    ).subscribe(amiiboTypes => this.updateState({ ...this.store.getValue(), amiiboTypes }));
  }
}
