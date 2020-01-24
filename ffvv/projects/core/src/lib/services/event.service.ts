import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {

  @Output() changeSection = new EventEmitter<string>();
  @Output() redirectWithSection = new EventEmitter<string>();

  constructor() { }
}
