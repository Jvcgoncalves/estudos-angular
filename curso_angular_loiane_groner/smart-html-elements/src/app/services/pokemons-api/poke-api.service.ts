import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  baseUrl: string = "https://pokeapi.co/api/v2/pokemon?limit=maxRange&offset=minRange";

  constructor() { }

  async getPokeApiData(pokemonsLimit: number = 151, pokemonsOffset: number = 0){
    const response = await fetch(this.formatUrl(pokemonsLimit,pokemonsOffset))
    .then(res => res.json()) 
    .then(async res => await Promise.all(res.results.map((pokemon: any) => fetch(pokemon.url))))
    .then( response => Promise.all(response.map((item: any) => item.json())))  
    .catch(err => {
      console.log(err);
    })
   
    
    return response
  }

  formatUrl(limit: number, offset: number): string{
    return this.baseUrl.replace("maxRange", limit.toString()).replace("minRange",offset.toString());
  }
}
