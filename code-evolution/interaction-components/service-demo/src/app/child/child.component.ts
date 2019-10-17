import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if(message === 'Good morning') {
            alert('Good morning teacher');
          } else if(message == 'Well done') {
            alert('Thank you teacher');
          }
        }
      )
  }

}
