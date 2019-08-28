import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent, PokemonItemComponent } from './components';
import { PokemonService } from './services';

@NgModule({
    imports: [PokemonRoutingModule, CommonModule, FormsModule],
    declarations: [PokemonComponent, PokemonItemComponent],
    providers: [PokemonService]
})
export class PokemonModule {

}
