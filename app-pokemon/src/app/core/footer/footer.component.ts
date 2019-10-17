import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer = 'Copyright';
  year = new Date().getFullYear();
  footerLink = 'Belcorp';
}
