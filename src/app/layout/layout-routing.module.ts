import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsCardComponent } from './pages/pokemons-card/pokemons-card.component';
import { PokemonsTableComponent } from './pages/pokemons-table/pokemons-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: PokemonsTableComponent
  },
  {
    path: 'card',
    component: PokemonsCardComponent
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
export class LayoutRoutingModule { }
