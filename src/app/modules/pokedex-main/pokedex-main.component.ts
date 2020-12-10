import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.component.html',
  styleUrls: ['./pokedex-main.component.scss']
})
export class PokedexMainComponent implements OnInit {

  constructor(private router: Router) { }

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
