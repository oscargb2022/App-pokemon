import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonDeleteComponent } from '../../components/pokemon-delete/pokemon-delete.component';
import { ToastrService } from 'ngx-toastr';
import { PokemonUpdateComponent } from '../../components/pokemon-update/pokemon-update.component';

@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: ['./pokemons-table.component.scss']
})
export class PokemonsTableComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public displayedColumns: string[] = [ 'id', 'name', 'experience', 'img', 'actions'];
  public dataSource = new MatTableDataSource<any>();
  public restPokemons: any = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog,
    private toastr: ToastrService
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
              img: data.sprites.front_shiny
            }
            this.pokemons.push(dataPokemons);
          },
          error : (e)=> console.log(e),
          complete: ()=>{
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            let asc = this.pokemons.sort((a: any,b: any) => a.id - b.id);
            this.dataSource.data = asc as any;
          }
        }
      );
    }
        
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePokemon(id: string) {
    const dialogRef = this.dialog.open(PokemonDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.pokemons.forEach((element: any) => {
          if(element.id != id){
            this.restPokemons.push(element);
          }
        });
        this.dataSource.data = this.restPokemons;
        this.pokemons = this.restPokemons;
        this.restPokemons = [];
        this.toastr.success('Record deleted successfully!', 'Success!', {
          timeOut: 2000,
        });
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
        this.pokemons.forEach((element: any) => {
          if(element.id == id){
            if(result){
              if(result.name){
                element.name = result.name;
              }
              if(result.experience){
                element.experience = result.experience;
              }
            }
            this.restPokemons.push(element);
          }else{
            this.restPokemons.push(element);
          }
        });
        this.dataSource.data = this.restPokemons;
        this.pokemons = this.restPokemons;
        this.restPokemons = [];
        this.toastr.success('Record updated successfully!', 'Success!');
      }
    });
  }

}
