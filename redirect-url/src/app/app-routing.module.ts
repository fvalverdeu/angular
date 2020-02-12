import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: ModalComponent,
    resolve: {
      url: 'redirectWithResolve'
    },
    data: {
      urlExternal: 'https://ffvvmqa.somosbelcorp.com/IngresoSistema/Login',
      target: '_self'
    }
  },
  {
    path: 'modal',
    component: ModalComponent,
    resolve: {
      url: 'redirectWithResolve'
    },
    data: {
      urlExternal: 'https://ffvvmqa.somosbelcorp.com/IngresoSistema/Login',
      target: '_self'
    }
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'redirectWithResolve',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const data = route.data as any;
        window.location.href = data.urlExternal;
      }
    }
  ]
})
export class AppRoutingModule { }
