import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen'},
  {name: 'Fluorine'},
  {name: 'Neon'},
];

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss']
})
export class PokemonCreateComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
