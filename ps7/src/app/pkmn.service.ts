import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Pkmn {
  title: string;
  name: string;
  imageUrl: string;
  ability: string;
  apiUrl: string;
  cache: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  constructor(private http: HttpClient) { }

  pkmnUrl = 'http://localhost:3000/ps6?name=pikachu';

  getPkmn(url) {
    console.log('help me:', this.http.get(url));
    return this.http.get(url);
    // return this.http.get<Pkmn>(this.pkmnUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Pkmn>> {
    return this.http.get<Pkmn>(
      this.pkmnUrl, { observe: 'response' });
  }
}
