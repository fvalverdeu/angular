import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gain-title',
  templateUrl: './gain-title.component.html',
  styleUrls: ['./gain-title.component.scss']
})
export class GainTitleComponent implements OnInit {
  title: string;
  color: string;
  size: string;

  constructor(private router: Router) {
    this.title = 'Cobranza';
    this.size = 'xlg';
    this.color = '#000000';
  }

  ngOnInit() { }
  redirect() {
    this.router.navigateByUrl('/kpis/retention-se');
  }
}
