import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "show",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var userSelection = args[0];
    if(userSelection === "healthy") {
      return input.filter((meal) => {
        return meal.isHealthy();
      });
    } else if (userSelection === "notHealthy") {
      return input.filter((meal) => {
        return !meal.isHealthy();
      });
    } else {
      return input;
    }
  }
}
