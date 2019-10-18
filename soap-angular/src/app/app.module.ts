import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TableModule} from 'primeng/table';

import { CarService } from './service/car.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgxSoapModule } from 'ngx-soap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule, MatInputModule,
  MatButtonModule, MatCardModule, MatProgressBarModule, MatFormFieldModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

const ANGULAR_MATERIAL_MODULES = [
  MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule,
  MatProgressBarModule, MatFormFieldModule
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    NgxSoapModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  providers: [HttpClient, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
