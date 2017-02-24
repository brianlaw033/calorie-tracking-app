import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent }   from './meal-list.component';
import { MealEditComponent }   from './meal-edit.component';
import { CaloriesPipe }   from './meal-pipe.component';

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
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
