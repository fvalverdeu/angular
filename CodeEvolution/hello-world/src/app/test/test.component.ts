import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

      <ng-template #thenBlock>
        <h2>Nando</h2>
      <ng-template>

      <ng-template #elseBlock>
        <h2>Other</h2>
      </ng-template>
            `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = false;

  constructor() { }

  ngOnInit() {
  }
}
