import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemons-card',
  templateUrl: './pokemons-card.component.html',
  styleUrls: ['./pokemons-card.component.scss']
})
export class PokemonsCardComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public arrayFavorites : any = [];

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
    ) { }


  ngOnInit(): void {
    for (let index = 1; index < 21; index++) {
      this.pokemonService.getPokemons(index).subscribe(
        {
          next: (data: any) => {
            let dataPokemons = {
              id: data.id,
              name: data.name,
              experience: data.base_experience,
              img: data.sprites.front_default,
              abilities: data.abilities
            }
            this.pokemons.push(dataPokemons);
          },
          error : (e)=> console.log(e),
          complete: ()=>{
            let asc = this.pokemons.sort((a: any,b: any) => a.id - b.id);
            this.pokemons = asc as any;
          }
        }
      );
    } 
  }

  public favoritePokemon(id: string, index: number){
    let match = this.arrayFavorites.indexOf(id);
    if(match === -1){
      this.arrayFavorites[index] = id;
    }else{
      this.arrayFavorites.splice(index, 1, '')
    }
    console.log(this.arrayFavorites);
  }

}
