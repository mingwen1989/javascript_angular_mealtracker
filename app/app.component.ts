import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
    </div>
  `
})


export class AppComponent {
    public tasks: Meal[];
    constructor(){
      this.meals = [
        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
        new Meal("Fries", "I only ate half of them.", 365),
      ];
    }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) {

  }
}
