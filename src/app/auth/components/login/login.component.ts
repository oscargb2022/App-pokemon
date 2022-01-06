import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fbLogin();
  }

  public fbLogin(){
    this.formLogin = this.fb.group({
      email: ['example@gmail.com', [Validators.email, Validators.required]],
      password: ['111111', [Validators.required, Validators.minLength(6)]]
    });
  }

  public login(){
    let form = this.formLogin.value;
    console.log(form);
    if(this.formLogin.invalid){
      return;
    }
    this.pokemonService.login(form.email, form.password);
    
  }

}
