import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <p>
    ---------<br>
    Name:"{{ meal.name }}"<br>
    Details:"{{ meal.details }}"<br>
    Calories:{{ meal.calories }}<br>
    ---------
    </p>
  `
})
export class MealComponent {
  public meal: Meal;
}
