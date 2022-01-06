import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';

import { MaterialModule } from '../shared/material/material.module';

import { PokemonUpdateComponent } from './components/pokemon-update/pokemon-update.component';
import { PokemonDeleteComponent } from './components/pokemon-delete/pokemon-delete.component';
import { PokemonsCardComponent } from './pages/pokemons-card/pokemons-card.component';
import { PokemonsTableComponent } from './pages/pokemons-table/pokemons-table.component';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    PokemonUpdateComponent,
    PokemonDeleteComponent,
    PokemonsCardComponent,
    PokemonsTableComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
