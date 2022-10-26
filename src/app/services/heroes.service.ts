import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHeroes } from 'src/app/models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  url_character: string =
    'https://rickandmortyapi.com/api/character/1,2,8,9,10,56,6,3,26,15,7.11';
  url_location: string = 'https://rickandmortyapi.com/api/location';
  url_episod: string = 'https://rickandmortyapi.com/api/episode';
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<IHeroes[]>(this.url_character);
  }

  getHero(id: number) {
    return this.http.get<IHeroes>(`${this.url_character}/${id}`);
  }
}
