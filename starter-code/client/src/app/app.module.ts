import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListOfDishesComponent } from './pages/list-of-dishes/list-of-dishes.component';
import { DishDetailsComponent } from './pages/dish-details/dish-details.component';

import { ListDishesService } from './services/list-dishes.service';
import { ListIngredientsService } from './services/list-ingredients.service';

const routes: Routes = [
  { path: '',  component: ListOfDishesComponent },
  { path: ':id',  component: DishDetailsComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    ListOfDishesComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListDishesService, ListIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
