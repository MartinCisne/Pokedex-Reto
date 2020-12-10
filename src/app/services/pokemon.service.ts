import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { PokemonList } from '../models/allPokemon.model';

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {

    constructor(private apiService:ApiService) { }

    pokemonList: PokemonList;

    getPokemonById(pokemonId){
        return this.apiService.getPokemonById(pokemonId)
            .pipe(
                map( data => {
                    if (data) {
                        return data
                    } else {
                        throw data
                    }
                })
            );
      }

    getPokemonByUrl(pokemonUrl){
        return this.apiService.getPokemonByUrl(pokemonUrl)
            .pipe(
                map( data => {
                    if (data) {
                        return data
                    } else {
                        throw data
                    }
                })
            );
      }

    getAllPokemon(){
        
        this.pokemonList = new PokemonList();

        return this.apiService.getAllRegionPokemon()
            .pipe(
                map( data => {
                    if(data){
                        this.pokemonList = data;
                        return data
                    } else {
                        throw data
                    }
                })
            )
      } 
  }