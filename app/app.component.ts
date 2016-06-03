import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>Meal Tracker</h1>
    <p *ngFor="#meal of meals" (click)="mealWasSelected(meal)">
      ---------<br>
      Name:"{{ meal.name }}"<br>
      Details:"{{ meal.details }}"<br>
      Calories:{{ meal.calories }}<br>
      ---------
    </p>
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
