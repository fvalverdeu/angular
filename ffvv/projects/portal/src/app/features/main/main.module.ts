import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSeComponent } from './pages/home-se/home-se.component';
import { MainComponent } from './main.component';
import { HomeGzComponent } from './pages/home-gz/home-gz.component';
import { HomeGrComponent } from './pages/home-gr/home-gr.component';
import { HomeDvComponent } from './pages/home-dv/home-dv.component';
import {MainCoreModule} from './core/core.module';
import {MainRoutingModule} from './main-routing.module';
import { UITitleModule } from '@portal/components/title';
import { PortalInterceptorsModule } from '@portal/core/interceptors';
import { PortalCoreModule } from '@portal/core'

@NgModule({
  declarations: [HomeSeComponent, MainComponent, HomeGzComponent, HomeGrComponent, HomeDvComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainCoreModule,
    UITitleModule,
    PortalInterceptorsModule,
    PortalCoreModule
  ]
})
export class MainModule { }
