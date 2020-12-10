import { Component, OnInit } from '@angular/core';
import { PokemonURL } from 'src/app/models/allPokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex_search.component.html',
  styleUrls: ['./pokedex_search.component.scss']
})
export class PokedexSearchComponent implements OnInit {

  pokemonList: any;
  selectedPokemonUrl: string;
  pokemonSelected: boolean = false;

  constructor(private pokemonService:PokemonService) { 
    this.pokemonList = new PokemonURL();

    this.pokemonService.getAllPokemon().subscribe( response => {
      this.pokemonList = response;
      console.log(this.pokemonList);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(){
    console.log(this.selectedPokemonUrl);
    this.pokemonSelected = false;
    this.pokemonSelected = true;
  }
}
