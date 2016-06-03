import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <p>
  ---------<br>
  Add Meal:
  <input placeholder="Name" #newName><br>
  <input placeholder="Details" #newDetails><br>
  <input placeholder="Calories" #newCalories><br>
  <button (click)="addMeal(newName, newDetails, newCalories)">Add</button><br>
  ---------
  </p>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var newMeal = new Meal(userName.value, userDetails.value, parseInt(userCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
