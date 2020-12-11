import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { PokemonList } from '../models/allPokemon.model';
import { PokemonData } from '../models/pokemon_data.model';
import { PokemonFavoriteModel } from '../models/favoritePokemon.model';

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {

    constructor(private apiService:ApiService) { }

    pokemonList: PokemonList;
    pokemonFavorites: PokemonFavoriteModel[];

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

    postPokemonFavorite(pokemon: PokemonFavoriteModel){
        return this.apiService.postFavoritePokemon(pokemon)
            .pipe(
                map( data => {
                    if(data){
                        return data
                    } else {
                        throw data
                    }
                })
            )
    }

    getFavoritesPokemon(){
        this.pokemonFavorites = [];
        return this.apiService.getFavoritesPokemon()
            .pipe(
                map( data => {
                    if(data){
                        return this.createFavoritesArray(data);
                    } else {
                        throw data
                    }
                })
            )
    }

    createFavoritesArray(favoritesData){
        const pokemonFavoritesArray: PokemonFavoriteModel[] = [];
        
        if(favoritesData == null){return [];}

        Object.keys(favoritesData).forEach(key => {
            const pokemon: PokemonFavoriteModel = favoritesData[key];
            pokemonFavoritesArray.push(pokemon);
        })

        return pokemonFavoritesArray;
    }
  }