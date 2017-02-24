import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';


@Pipe({
  name: "caloriesFilter",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], calMode) {
    var output: Meal[] = [];
    if(calMode === "over") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calMode === "below") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
