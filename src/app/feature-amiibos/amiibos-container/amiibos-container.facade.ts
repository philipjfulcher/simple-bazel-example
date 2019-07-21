import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, first, map } from 'rxjs/operators';
import { AmiiboAPIService } from '../../shared/data-access/amiibo-api.service';
import { Amiibo } from '../../shared/data-access/amiibo.class';

export interface AmiibosState {
  amiibos: Amiibo[];
}

const initialState: AmiibosState = {
  amiibos: []
};

@Injectable({
  providedIn: 'root'
})
export class AmiibosContainerFacade {
  private store = new BehaviorSubject<AmiibosState>(initialState);
  private state$ = this.store.asObservable();

  amiibos$: Observable<Amiibo[]> = this.state$.pipe(
    map(state => state.amiibos),
    distinctUntilChanged()
  );

  constructor(private amiibosAPI: AmiiboAPIService) {
    this.getAllAmiibos();
  }

  private updateState(state: AmiibosState) {
    this.store.next(state);
  }

  private getAllAmiibos() {
    this.amiibosAPI.amiibos$.pipe(
      first()
    ).subscribe(amiibos => this.updateState({ ...this.store.getValue(), amiibos }));
  }
}
