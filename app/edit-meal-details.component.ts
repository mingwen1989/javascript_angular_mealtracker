import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <p>
  ---------<br>
  Edit Name: <input [(ngModel)]="meal.name" size="38"/><br>
  Edit Details: <input [(ngModel)]="meal.details" size="35"/><br>
  Edit Calories: <input [(ngModel)]="meal.calories" size="34"/><br>
  ---------
  </p>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
