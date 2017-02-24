import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
    <meal-list class='col-xs-12'
      [mealList] = 'masterMealList'
    ></meal-list>
    <new-meal
      class='container'
      (newSubmit) = 'newMeal($event)'
    ></new-meal>
    </div>
  `
})

export class AppComponent{
  public masterMealList: Meal[] = [
    new Meal('Pizza','I ate 5 big slices', 1000, false),
    new Meal('Fishball', 'Did not eat a lot', 150, false),
    new Meal('Steak', '12oz', 1200, false),
    ];

newMeal(meal){
      this.masterMealList.push(meal);
    }

}
