import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
declare var $ :any;

@Component({
  selector: 'meal-list',
  template:`
  <div class='col-xs-12'>
  <!--Adding a menu for sorting food with high cal or low cal use-->
    <select (change)="menu($event.target.value)" class="filter">
      <option value="all"selected="selected">All</option>
      <option value="over"> over 500cal </option>
      <option value="below">below 500cal </option>
    </select>
    <!--Adding a menu for sorting food by date-->
    <select (change)="sortByDate($event.target.value)" class='filter'>
        <!--Removing repeating dates in dateList(made in dateSort() from app.component.ts) by a pipe-->
        <option *ngFor='let dateMenux of dateList | dateFilter'value={{dateMenux}}>{{dateMenux}}</option>
    </select>
    <button (click)='detail(mealList)' class='btn'>Show Details</button>
  </div>
    <!--Adding 2 pipes to sort foods-->
    <div *ngFor='let mealx of mealList | caloriesFilter:mode| datePipe:type' class='col-xs-3'>
        <h3>{{mealx.name}}</h3>
        <p>{{mealx.date}}</p>
        <div *ngIf='mealx.show'>
          <p>{{mealx.details}}</p>
          <p>Calories: {{mealx.calories}}</p>
        </div>
      <button (click)='edit(mealx)' class='btn'>Edit</button>
    </div>
    <edit-meal
      class='col-xs-12'
      [mealToEdit] = 'editWhich'
      (edited) = 'edit($event)'
    ></edit-meal>
    <total-a-day class='col-xs-12 container'
      [mealList] = 'mealList'
      [date] = 'type'
      [datesss] = 'dateList'
    ></total-a-day>
  `
})



export class MealListComponent {
  @Input() mealList: Meal[];
  @Input() dateList: string[];
  public editWhich: Meal = null;
  public mode: string= "";
  public type: string= "All";
  public mealListAfterCalPipe: Meal[] = [];

// hide and show details of food
  detail(meals){
  for(var i=0; i<meals.length;i++){
    if(meals[i].show === false){
      meals[i].show = true;
    }else{
      meals[i].show = false;
    }
  }
}
  edit(meal){
    this.editWhich = meal;
  }

  menu(choice){
    this.mode = choice;
  }

  sortByDate(dateChosen){
    this.type = dateChosen;
  }
}
