import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { MenuFooter } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  menuFooterList: Array<MenuFooter> = [];


  constructor(private service: FooterService) {
  }

  ngOnInit() {
    this.menuFooterList = this.service.getMenuFooter();
    console.log(this.menuFooterList);
  }

}
