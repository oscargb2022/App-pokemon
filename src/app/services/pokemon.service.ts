import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public api: string = environment.apiPokemon;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    private httpClient: HttpClient, 
    private router: Router
    ) {
      this.verifyToken();
    }

  public verifyToken(){
    if(localStorage.getItem('tokenFicticio')){
      this.loggedIn.next(true);
    }
  }

  public getPokemons(id: number) {
    return this.httpClient.get(`${this.api}/` + id);
  }

  public login(email: string, password: string) {
    if (email === 'example@gmail.com' && password === '111111') {
      this.loggedIn.next(true);
      localStorage.setItem('tokenFicticio', email);
      this.router.navigate(['pokemon']);
    }
  }

  public logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('tokenFicticio');
    this.router.navigate(['auth']);
  }
}
