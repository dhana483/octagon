import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { MainComponent } from './components/main/main.component';
import {InformationService} from './components/information.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

