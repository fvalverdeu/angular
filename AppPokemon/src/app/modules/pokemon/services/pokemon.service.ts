import { HttpClient } from '@angular/common/http';

export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}


}
