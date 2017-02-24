import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>Add Meal:</h3>
    <div>
      <input #newName placeholder='Name'>
      <input #newDetails placeholder='Details'>
      <input #newCalories placeholder='Calories'>
      <input #newDate type='date' placeholder='Date'>
      <button (click)="
        addMeal(newName.value, newDetails.value, newCalories.value, newDate.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
        newDate.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newSubmit = new EventEmitter();
  addMeal(name: string, details: string, calories: string, date: string) {
    var intCal : number = parseInt(calories);
    var newMealToAdd: Meal = new Meal(name, details,intCal, date, false);
    this.newSubmit.emit(newMealToAdd);
  }
}
