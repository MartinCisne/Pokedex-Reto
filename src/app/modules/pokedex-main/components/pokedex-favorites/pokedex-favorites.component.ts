import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-favorites',
  templateUrl: './pokedex-favorites.component.html',
  styleUrls: ['./pokedex-favorites.component.scss']
})
export class PokedexFavoritesComponent implements OnInit {

  favoritesPokemon: any;
  faArrowLeft = faArrowLeft;
  showCards: boolean = false;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getFavoritesPokemon();
  }

  getFavoritesPokemon(){
    this.pokemonService.getFavoritesPokemon().subscribe(response => {
      this.favoritesPokemon = response.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i)
      this.showCards = true;
    }, err => {
      console.log(err);
    })
  }

  goToPokemonInfo(url){
    this.router.navigate(['/pokedex/info', url]);
  }

  toPokedexDashboard(){
    this.router.navigateByUrl('/pokedex');
  }
}
