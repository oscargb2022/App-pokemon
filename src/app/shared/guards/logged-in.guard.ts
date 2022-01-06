import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  private logged : boolean = false;

  constructor(
    public pokemonService: PokemonService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.pokemonService.loggedIn.subscribe(
        res =>{
          this.logged = res;
          console.log(this.logged);
          if(!this.logged){
            this.router.navigate(['auth'])
          }
        }
      );

      return true;
  }

}
