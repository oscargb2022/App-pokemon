import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/shared/interfaces/pokemon';
import { PokemonDeleteComponent } from '../../components/pokemon-delete/pokemon-delete.component';
import { ToastrService } from 'ngx-toastr';
import { PokemonUpdateComponent } from '../../components/pokemon-update/pokemon-update.component';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public arrayPokemons: any = [];
  public restPokemons: any = [];
  public arrayFavorites : any = [];

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog,
    private toastr: ToastrService
    ) { }


  ngOnInit(): void {
    for (let index = 1; index < 21; index++) {
      this.pokemonService.getPokemons(index).subscribe(
        {
          next: (data) => {
            this.arrayPokemons.push(data);
            console.log(data);
          },
          error : (e)=> console.log(e),
          complete: ()=>{
            let asc = this.arrayPokemons.sort((a: any,b: any) => a.id - b.id);
            this.arrayPokemons = asc as any;
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


  deletePokemon(id: string) {
    const dialogRef = this.dialog.open(PokemonDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.arrayPokemons.forEach((element: any) => {
          if(element.id != id){
            this.restPokemons.push(element);
          }
        });
        this.arrayPokemons = this.restPokemons;
        this.restPokemons = [];
        this.toastr.success('Record deleted successfully!', 'Success!');
      }
    });
  }

  updatePokemon(id: string, name: string, experience: string) {
    const dialogRef = this.dialog.open(PokemonUpdateComponent,{
      width: '450px',
      data: {
        id, name, experience
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.arrayPokemons.forEach((element: any) => {
          if(element.id == id){
            if(result){
              if(result.name){
                element.name = result.name;
              }
              if(result.experience){
                element.base_experience = result.experience;
              }
            }
            this.restPokemons.push(element);
          }else{
            this.restPokemons.push(element);
          }
        });
        this.arrayPokemons = this.restPokemons;
        this.restPokemons = [];
        this.toastr.success('Record updated successfully!', 'Success!');
      }
    });
  }

}
