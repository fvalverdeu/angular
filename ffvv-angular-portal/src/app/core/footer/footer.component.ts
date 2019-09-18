import { Component, OnInit, ɵConsole } from '@angular/core';
import { FooterService } from './footer.service';
import { Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { MenuFooter } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  menuFooterList: MenuFooter[];

  constructor(private service: FooterService) {
  }

  ngOnInit() {
    this.service.getMenuFooter().subscribe((data: MenuFooter[]) => {
      this.menuFooterList = data;
      console.log(this.menuFooterList);
    });
  }
}
