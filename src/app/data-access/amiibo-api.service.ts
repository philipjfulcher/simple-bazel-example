import { Injectable } from '@angular/core';
import { Amiibo, AmiibosResponse, GameSeries } from './amiibo.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmiiboAPIService {
  private apiUrl = 'https://www.amiiboapi.com';

  constructor(private http: HttpClient) { }

  getAllAmiibos(): Observable<Amiibo[]> {
    return this.http.get<AmiibosResponse<Amiibo>>(`${this.apiUrl}/api/amiibo/`).pipe(map(response => response.amiibo));
  }

  getAllGameSeries(): Observable<GameSeries[]> {
    return this.http.get<AmiibosResponse<GameSeries>>(`${this.apiUrl}/api/amiiboseries/`).pipe(map(response => response.amiibo));
  }
}
