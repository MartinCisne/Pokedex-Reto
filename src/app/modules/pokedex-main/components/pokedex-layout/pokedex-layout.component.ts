import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-layout',
  templateUrl: './pokedex-layout.component.html',
  styleUrls: ['./pokedex-layout.component.scss']
})
export class PokedexLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  toPokedexSearch(){
    this.router.navigate(['/pokedex-search']);
  }
}
