import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemon = [];
  ngOnInit(){
    this.pokemon = [
      {
        id: 1,
        name: 'pokemon1',
        image: 'image1.svg'
      },
      {
        id: 2,
        name: 'pokemon2',
        image: 'image2.svg'
      },
      {
        id: 3,
        name: 'pokemon3',
        image: 'image3.svg'
      },
      {
        id: 4,
        name: 'pokemon4',
        image: 'image4.svg'
      },
      {
        id: 5,
        name: 'pokemon5',
        image: 'image5.svg'
      },
      {
        id: 6,
        name: 'pokemon6',
        image: 'image6.svg'
      },
      {
        id: 7,
        name: 'pokemon7',
        image: 'image7.svg'
      },
      {
        id: 8,
        name: 'pokemon8',
        image: 'image8.svg'
      },
      {
        id: 9,
        name: 'pokemon9',
        image: 'image9.svg'
      }
    ]
  }
}
