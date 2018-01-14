import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent },
{ path: 'information', component: InformationComponent },
  { path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
