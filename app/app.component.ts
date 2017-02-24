import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
    <meal-list class='col-xs-12'
      [mealList] = 'masterMealList'
      [dateList] = 'dateSort()'
    ></meal-list>
    <new-meal
      class='container col-xs-12'
      (newSubmit) = 'newMeal($event)'
    ></new-meal>
    </div>
  `
})

export class AppComponent{
  public masterMealList: Meal[] = [
    new Meal('Pizza','I ate 5 big slices', 1000, '2017-02-22', false),
    new Meal('Fishball', 'Did not eat a lot', 150, '2017-02-23', false),
    new Meal('Steak', '12oz', 1200, '2017-02-24', false),
    ];

newMeal(meal){
      this.masterMealList.push(meal);
    }

dateSort(){
  var dateList : string[] =[];
    for (var i = 0; i < this.masterMealList.length; i++){
      dateList.push(this.masterMealList[i].date);
    }
      return dateList;
    }

}
