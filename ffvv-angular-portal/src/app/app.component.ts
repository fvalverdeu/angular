import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logger } from './core/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Template';

  ngOnInit() {
    if (environment.production) {
      Logger.enableProductionMode();
    }
  }
}
