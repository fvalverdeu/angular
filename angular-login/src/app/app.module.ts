import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { LoginComponent } from './components/login/login.component';

import { UsuarioService } from './services/usuario.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  providers: [ UsuarioService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
