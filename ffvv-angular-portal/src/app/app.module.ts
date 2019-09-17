import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent, FooterComponent, CampaignProfile, UserProfile } from './core';
// import { CardComponent, CardHeaderComponent, CardContentComponent, CardContentInfoComponent,
//   CardContentBodyComponent } from './shared/components';

import { GraphQLModule } from './graphql.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterService } from './core/footer/footer.service';

const components = [HeaderComponent, FooterComponent, CampaignProfile, UserProfile];
  //CardComponent, CardHeaderComponent, CardContentComponent, CardContentInfoComponent, CardContentBodyComponent];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GraphQLModule, BrowserAnimationsModule],
  declarations: [AppComponent, ...components],
  providers: [FooterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
