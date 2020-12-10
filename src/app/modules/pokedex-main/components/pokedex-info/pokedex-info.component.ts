import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/models/chart_data.model';
import { PokemonData } from 'src/app/models/pokemon_data.model';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  view: any[] = [300, 300];

  statsNames = ['hp','attack','defense','special-attack','special-defense','speed'];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Stats';
  showYAxisLabel = true;
  yAxisLabel = 'Points';
 
  colorScheme = {
    domain: ['#90caf9']
  };
  

  //POKEMON DATA
  pokemonData: PokemonData;
  pokemonName: string;
  pokemonType1: string;
  pokemonType2: string;
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonStat: any;
  abilities: any;

  pokemonFrontSprite: string;
  pokemonBackSprite: string;

  //CONTROL FLAGS
  showData: boolean = false;

  constructor(private pokemonService: PokemonService) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.newChart = [];
    this.pokemonName = '';
    this.pokemonType1 = '';
    this.pokemonType2 = '';

    this.pokemonService.getPokemonByUrl(this.selectedPokemonUrl).subscribe(response => {

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
    
      console.log(this.pokemonData);
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
}
