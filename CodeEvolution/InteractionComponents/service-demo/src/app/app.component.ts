import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _interactionService: InteractionService) {}

  greetStudent() {
    this._interactionService.sendMessage('Good morning');
  }

  appreciateStudent() {
    this._interactionService.sendMessage('Well done');
  }
}
