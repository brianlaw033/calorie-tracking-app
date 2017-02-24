import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent }   from './meal-list.component';
import { MealEditComponent }   from './meal-edit.component';
import { CaloriesPipe }   from './meal-pipe.component';
import { DateFilter }   from './date-pipe.component';
import { NewMealComponent }   from './new-meal.component';
import { DateSortPipe }   from './datesort-pipe.component';
import { TotalCaloriesADay }   from './total-meal.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealEditComponent,
    CaloriesPipe,
    NewMealComponent,
    DateFilter,
    DateSortPipe,
    TotalCaloriesADay,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
