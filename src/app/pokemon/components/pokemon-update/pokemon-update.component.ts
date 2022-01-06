import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.scss']
})
export class PokemonUpdateComponent implements OnInit {

  public formUpdatePokemon!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PokemonUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fbUpdatePokemon();
  }

  public fbUpdatePokemon(){
    this.formUpdatePokemon = this.fb.group({
      name: [this.data.name],
      experience: [this.data.experience],
      // img: ['']
    });
  }

}
