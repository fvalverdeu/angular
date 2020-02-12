import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
/*   {
    path: 'urlRedirect',
    component: AppComponent,
    resolve: {
      url: 'redirectWithResolve'
    },
    data: {
      urlExternal: 'https://ffvvmqa.somosbelcorp.com/IngresoSistema/Login',
      target: '_self'
    }
  }, */
/*   {
    path: 'home',
    component: HomeComponent,
    resolve: {
      url: 'redirectWithResolve'
    },
    data: {
      urlExternal: 'https://ffvvmqa.somosbelcorp.com/IngresoSistema/Login',
      target: '_self'
    }
  } */
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    MainComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
