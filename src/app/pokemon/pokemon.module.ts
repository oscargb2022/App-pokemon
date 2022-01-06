import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonUpdateComponent } from './components/pokemon-update/pokemon-update.component';
import { PokemonDeleteComponent } from './components/pokemon-delete/pokemon-delete.component';
import { PokemonTableComponent } from './pages/pokemon-table/pokemon-table.component';
import { PokemonCardComponent } from './pages/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokemonTableComponent,
    PokemonCardComponent,
    PokemonCreateComponent,
    PokemonUpdateComponent,
    PokemonDeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    MaterialModule
  ]
})
export class PokemonModule { }
