import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  search(id: number): Observable<any> {
    const endpoint = this.url + '/' + id;
    return this.http.get(endpoint);
  }
}
