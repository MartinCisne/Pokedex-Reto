import { Component, OnInit } from '@angular/core';
import { PokemonURL } from 'src/app/models/allPokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex_search.component.html',
  styleUrls: ['./pokedex_search.component.scss']
})
export class PokedexSearchComponent implements OnInit {

  pokemonList: any;
  selectedPokemonUrl: string;
  pokemonSelected: boolean = false;
  faArrowLeft = faArrowLeft;

  constructor(private pokemonService:PokemonService,private router:Router) { 
    this.pokemonList = new PokemonURL();

    this.pokemonService.getAllPokemon().subscribe( response => {
      this.pokemonList = response;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(){
    this.pokemonSelected = false;
    this.pokemonSelected = true;
  }

  toPokedexDashboard(){
    this.router.navigateByUrl('/pokedex');
  }
}
