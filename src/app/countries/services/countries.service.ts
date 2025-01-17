import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from '../interfaces/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  searchPokemon(term: string): Observable<Pokedex[]> {
    return this.http.get<Pokedex[]>(`${this.apiUrl}/${term}`);
  }
}
