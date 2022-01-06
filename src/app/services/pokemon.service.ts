import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Pokemon } from '../shared/interfaces/pokemon';
import { map, Observable, toArray } from 'rxjs';

interface ResponseApiPokemon{
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
} 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  public api : string = environment.apiPokemon;

  constructor(private httpClient: HttpClient) { }

  /* public getPokemons(offset: number = 0, limit: number = 20): Observable<Pokemon[]>{
    let params = new HttpParams();
    params = params.append('offset', offset);
    params = params.append('limit', limit);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.get<ResponseApiPokemon>(`${this.api}/pokemon`, {params: params, headers: headers}).pipe(
      map( res => {
        const pokemons = res.results;
        return pokemons;
      })
    );
  } */

  public getPokemons(id: number){
    return this.httpClient.get(`${this.api}/`+ id);
  }

}
