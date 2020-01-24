import { Component, OnInit } from '@angular/core';
import {IOption} from '@portal/core/models';
import {SessionService} from '@portal/core/services';
import {EOption} from '@portal/core/constants';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  optionsFooter: IOption[];
  year = new Date().getFullYear();
  showFooter = false;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    const options = this.sessionService.getOptions();
    this.optionsFooter = options.filter(x => x.option_type === EOption.FOOTER);
  }

  compareTexts(source: string, target: string) {
    return source.toLocaleLowerCase() === target.toLocaleLowerCase();
  }
  toggleFooter() {
    this.showFooter = !this.showFooter;
  }
}
