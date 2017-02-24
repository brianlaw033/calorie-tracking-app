import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
<div *ngIf='mealToEdit'>
<h3>Editor</h3>
  <input [(ngModel)]="mealToEdit.name">
  <input [(ngModel)]="mealToEdit.details">
  <input [(ngModel)]="mealToEdit.calories">
  <button (click)="doneEdit()">Done</button>
</div>
  `
})

export class MealEditComponent{
  @Input() mealToEdit: Meal;
  @Output() edited = new EventEmitter();
  doneEdit(editedMeal){
    this.edited.emit();
  }
}
