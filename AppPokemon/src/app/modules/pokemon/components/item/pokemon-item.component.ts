import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon: any;
  customImage(id: number) {
    return 'https://belcorp-taller-pokemon.s3-us-west-2.amazonaws.com/pokemones/' + id + '.svg';
  }
}
