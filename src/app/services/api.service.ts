import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Welcome } from '../models/pokemon_data.model';
import { PokemonList } from '../models/allPokemon.model';

const API_ENDPOINT = environment.apiEndpoint;

@Injectable({
    providedIn: "root",
  })
  export class ApiService {

    url: string = API_ENDPOINT;

    constructor(private http: HttpClient) {}

    public getPokemon(pokemonId: number){
        return this.http.get<Welcome>(`${this.url}${pokemonId}`);
      }

    public getAllRegionPokemon(){
        return this.http.get<PokemonList>(`${this.url}pokemon?limit=721`)
      }
  }