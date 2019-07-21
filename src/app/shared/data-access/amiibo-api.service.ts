import { Injectable } from '@angular/core';
import { Amiibo, AmiibosResponse, AmiiboType } from './amiibo.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmiiboAPIService {
  private apiUrl = 'https://www.amiiboapi.com';
  amiibos$: Observable<Amiibo[]>;
  amiiboTypes$: Observable<AmiiboType[]>;

  constructor(private http: HttpClient) { 
    this.amiibos$ = this.http.get<AmiibosResponse<Amiibo>>(`${this.apiUrl}/api/amiibo/`).pipe(map(response => response.amiibo), shareReplay(1))
    this.amiiboTypes$ = this.amiibos$.pipe(
      map(amiibos => {
        const types: AmiiboType[] = [];

        amiibos.forEach(amiibo => {
          if(!types.map(type => type.name).includes(amiibo.type)) {
            types.push({name: amiibo.type, image: amiibo.image})
          }
        });

        return types;
      })
    );
  }
}
