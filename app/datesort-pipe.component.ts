import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "datePipe",
  pure: false
})

export class DateSortPipe implements PipeTransform {
  transform(input: Meal[], type) {
    var output: Meal[] = [];
    if (type === 'All' || type == ""){
      return input;
    }else {
      for (var i = 0; i<input.length; i++){
        if (input[i].date == type){
        output.push(input[i]);
      };
    }return output
  }
}
}
