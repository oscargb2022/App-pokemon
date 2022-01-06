import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  public logout(): void{
    this.pokemonService.logout();
  }

}
