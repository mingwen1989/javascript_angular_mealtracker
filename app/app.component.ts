import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
  <p *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
    ---------<br>
    Name:"{{ currentMeal.name }}"<br>
    Details:"{{ currentMeal.details }}"<br>
    Calories:{{ currentMeal.calories }}<br>
    ---------
  </p>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)">></meal-list>
    </div>
  `
})


export class AppComponent {
    public meals: Meal[];
    constructor(){
      this.meals = [
        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
        new Meal("Fries", "I only ate half of them.", 365),
      ];
    }
    mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
    }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) {

  }
}
