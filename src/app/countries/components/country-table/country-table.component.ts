import { Component, Input } from '@angular/core';
import { Pokedex } from '../../interfaces/pokedex';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styles: [

  ]
})
export class CountryTableComponent {


@Input()
public countries: Pokedex[] = [];

}
