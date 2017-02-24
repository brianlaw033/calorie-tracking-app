import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'total-a-day',
  template: `
    <div>
    <p>Total Calories Consumed on {{date}}: {{totalCal()}}</p>
    <p>Average Calories Consumed per Day: {{averageCal()}}</p>
    </div>
  `
})

export class TotalCaloriesADay{
  @Input() mealList: Meal[];
  @Input() date: string;
  @Input() datesss: string[];
  public totalThisDay: number = 0;
  public totalAll: number = 0;

  totalCal(){
    this.totalThisDay = 0;
    if(this.date == 'All'){
      for(var i=0; i<this.mealList.length; i++){
        this.totalThisDay = this.totalThisDay+this.mealList[i].calories;
        this.totalAll = this.totalThisDay;
      }
    }else{
    for(var i=0; i<this.mealList.length; i++){
      if (this.mealList[i].date == this.date){
        this.totalThisDay = this.totalThisDay+this.mealList[i].calories;

      }
    }
  }return this.totalThisDay;
}
  averageCal(){
    return this.totalAll/this.datesss.length;
  }

}
