import { Pokedex } from './../../interfaces/pokedex';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { PokedexService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {


  public pokemons: any = [];

  constructor ( private pokedexService: PokedexService) {};

  searchByName(term: string): void {
    this.pokedexService.searchPokemon(term)
    .subscribe(pokemon => {
        // this.pokemon = pokemon;
         this.pokemons = Array.isArray(pokemon) ? pokemon : [pokemon];
        console.log(this.pokemons);
    });
}
}
