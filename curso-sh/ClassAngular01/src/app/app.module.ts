import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParticipanteService } from './service/participante.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, 
    //FormsModule
    ReactiveFormsModule
  ],
  providers: [ParticipanteService],
  bootstrap: [RegistroComponent]
})
export class AppModule { }
