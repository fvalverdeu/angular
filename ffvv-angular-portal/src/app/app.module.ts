import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent, FooterComponent, CampaignProfile, UserProfile } from './core';

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { FooterService } from './core/footer/footer.service';

const components = [HeaderComponent, FooterComponent, CampaignProfile, UserProfile];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ApolloModule, HttpLinkModule],
  declarations: [AppComponent, ...components],
  providers: [FooterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
