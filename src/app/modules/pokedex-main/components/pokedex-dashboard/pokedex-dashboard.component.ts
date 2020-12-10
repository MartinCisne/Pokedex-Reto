import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-dashboard',
  templateUrl: './pokedex-dashboard.component.html',
  styleUrls: ['./pokedex-dashboard.component.scss']
})
export class PokedexDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toPokedexSearch(){
    this.router.navigateByUrl('/pokedex/search');
  }

}
