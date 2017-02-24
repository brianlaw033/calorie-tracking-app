import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <select (change)="menu($event.target.value)" class="filter">
    <option value="all"selected="selected">All</option>
    <option value="over"> over 500cal </option>
    <option value="below">below 500cal </option>
  </select>
    <div *ngFor='let mealx of mealList | caloriesFilter:mode' class='col-xs-3'>
      <h3>{{mealx.name}}</h3>
      <div *ngIf='mealx.show'>
        <p>{{mealx.details}}</p>
        <p>Calories: {{mealx.calories}}</p>
      </div>
      <button (click)='detail(mealx)' class='btn'>Details</button>
      <button (click)='edit(mealx)' class='btn'>Edit</button>
    </div>
    <edit-meal
      class='col-xs-12'
      [mealToEdit] = 'editWhich'
      (edited) = 'edit($event)'
    ></edit-meal>
  `
})



export class MealListComponent {
  @Input() mealList: Meal[];
  public editWhich: Meal = null;
  public mode: string = '';

  detail(meal){
    if(meal.show === false){
    meal.show = true;
  }else{
    meal.show = false;
  }
}
  edit(meal){
    this.editWhich = meal;
  }

  menu(choice){
    this.mode = choice;
  }
}
