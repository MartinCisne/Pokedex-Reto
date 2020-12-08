import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/allPokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonList: PokemonList;

  constructor(pokemonService:PokemonService) { 
  }

  ngOnInit(): void {
  }

}
