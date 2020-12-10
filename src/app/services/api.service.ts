import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { PokemonData} from '../models/pokemon_data.model';
import { PokemonList } from '../models/allPokemon.model';

const API_ENDPOINT = environment.apiEndpoint;

@Injectable({
    providedIn: "root",
  })
  export class ApiService {

    url: string = API_ENDPOINT;

    constructor(private http: HttpClient) {}

    public getPokemonById(pokemonId: number){
        console.log(`${this.url}pokemon/${pokemonId}`);
        return this.http.get<PokemonData>(`${this.url}pokemon/${pokemonId}`);
      }

    public getAllRegionPokemon(){
        console.log(`${this.url}pokemon?limit=721`);
        return this.http.get<PokemonList>(`${this.url}pokemon?limit=721`)
      }

    public getPokemonByUrl(pokemonUrl: string){
        console.log(pokemonUrl);
        return this.http.get<PokemonData>(pokemonUrl);
      }

  }