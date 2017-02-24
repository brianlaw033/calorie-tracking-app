import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "dateFilter",
  pure: false
})

export class DateFilter implements PipeTransform {
  transform(input: string[]) {
  var output : string[] = ['All'];
    for (var i=0; i<input.length; i++){
        var torf : boolean = false;
        for (var y=0; y<output.length; y++){
          if(input[i] == output[y]){
            torf = true;
          }
        }if(torf === false){
          output.push(input[i]);
        }
      }
      return output;
}
}
