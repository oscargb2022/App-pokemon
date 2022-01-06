import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PokemonTableComponent } from './pages/pokemon-table/pokemon-table.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonDeleteComponent } from './components/pokemon-delete/pokemon-delete.component';
import { PokemonCardComponent } from './pages/pokemon-card/pokemon-card.component';

const routes: Routes = [
  {
    path: 'table',
    component: PokemonTableComponent
  },
  {
    path: 'card',
    component: PokemonCardComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
