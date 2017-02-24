import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>Add Meal:</h3>
    <div>
      <input #newName placeholder='Name'>
      <input #newDetails placeholder='Details'>
      <input #newDCalories placeholder='Calories'>
      <button (click)="
        addMeal(newName.value, newDetails.value, newDCalories.value);
        newName.value='';
        newDetails.value='';
        newDCalories.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newSubmit = new EventEmitter();
  addMeal(name: string, details: string, calories: string) {
    var intCal : number = parseInt(calories);
    var newMealToAdd: Meal = new Meal(name, details,intCal, false);
    this.newSubmit.emit(newMealToAdd);
  }
}
