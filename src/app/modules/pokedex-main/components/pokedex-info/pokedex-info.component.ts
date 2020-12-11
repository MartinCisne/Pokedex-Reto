import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/models/chart_data.model';
import { PokemonData } from 'src/app/models/pokemon_data.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PokemonFavoriteModel } from 'src/app/models/favoritePokemon.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-info',
  templateUrl: './pokedex-info.component.html',
  styleUrls: ['./pokedex-info.component.scss']
})
export class PokedexInfoComponent implements OnInit, OnChanges {

  @Input() selectedPokemonUrl: string;

  //NGX CHART
  chartData: ChartDataModel;
  chart: any[] = [];
  newChart: any[] = [];

  view: any[] = [250, 250];

  statsNames = ['hp','attack','defense','special-attack','special-defense','speed'];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Stats';
  showYAxisLabel = true;
  yAxisLabel = 'Points';

  //POKEMON DATA
  pokemonData: PokemonData;
  pokemonFavorite: PokemonFavoriteModel;
  pokemonName: string;
  pokemonType1: string;
  pokemonType2: string;
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonStat: any;
  abilities: any;
  url: any;

  pokemonFrontSprite: string;
  pokemonBackSprite: string;

  //CONTROL FLAGS
  showData: boolean = false;
  showAlert: boolean = false;

  //FA ICON
  faStar = faStar;
  faArrowLeft = faArrowLeft;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => {
      this.url = params['url'];
    });
   }

  ngOnInit(): void {
    if(this.url != undefined)
    this.getPokemonInfo(this.url);
  }

  ngOnChanges(): void{
    if(this.selectedPokemonUrl != undefined)
      this.getPokemonInfo(this.selectedPokemonUrl);
  }

  getPokemonInfo(url){
    this.newChart = [];
    this.pokemonName = '';
    this.pokemonType1 = '';
    this.pokemonType2 = '';

    this.showAlert = false;

    this.pokemonService.getPokemonByUrl(url).subscribe(response => {

      this.showData = true;

      this.pokemonData = response;
      this.pokemonName = this.pokemonData.name;
      this.pokemonHeight = this.pokemonData.height / 10;
      this.pokemonWeight = this.pokemonData.weight / 10;

      this.pokemonFrontSprite = this.pokemonData.sprites.front_default;
      this.pokemonBackSprite = this.pokemonData.sprites.back_default;
      
      this.pokemonType1 = this.pokemonData.types[0].type.name;
      if(this.pokemonData.types[1] != undefined)
      this.pokemonType2 = this.pokemonData.types[1].type.name;

      for(let stat of this.statsNames){
        this.setStatsChartData(stat);
      }

      this.abilities = this.pokemonData.abilities;
    })
  }

  setStatsChartData(stat: string){

    this.pokemonStat = '';

    this.chartData = {
      name: '',
      value: 0
    };

    this.pokemonData.stats.filter( x => x.stat.name == stat).forEach( stat => {
      this.pokemonStat = stat.base_stat;
    });

    this.chartData.name = stat;
    this.chartData.value = this.pokemonStat;
    this.newChart.push(this.chartData);
    this.chart = [...this.newChart];
  }

  addPokemonFavorite(){
    this.pokemonFavorite = new PokemonFavoriteModel();
    
    this.pokemonFavorite.name = this.pokemonName;
    this.pokemonFavorite.url = this.selectedPokemonUrl;
    this.pokemonFavorite.sprite = this.pokemonFrontSprite;

    this.pokemonService.postPokemonFavorite(this.pokemonFavorite).subscribe( result => {
      console.log(result);
      this.showAlert = true;
    }, err => {
      console.log(err);
    });
  }

  toPokedexFavorites(){
    this.router.navigateByUrl('/pokedex/favorites');
  }
}
