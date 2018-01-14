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
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { UserInsertFormComponent } from './components/information/user-insert-form/user-insert-form.component';
import { UserTableComponent } from './components/information/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    MainComponent,
    ShoppingListComponent,
    UserInsertFormComponent,
    UserTableComponent
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


