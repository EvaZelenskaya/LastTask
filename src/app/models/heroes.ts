import { Data } from '@angular/router';

export interface IHeroes {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IHeroesOrigin;
  location: IHeroesLocation;
  image?: string;
  episode: IHeroesEpisod;
  url: string;
  created: any;
}

export interface IHeroesOrigin {
  name: string;
  url: string;
}
export interface IHeroesLocation {
  id: number;
  name: string;
  type: string;
  gender: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface IHeroesEpisod {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}
