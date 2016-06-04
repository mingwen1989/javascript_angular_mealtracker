export class Meal {
  constructor(public name: string, public details: string, public calories: number) {
  }
  isHealthy(): boolean {
    if(this.calories<500){
      return true;
    }
    else {
      return false;
    }
  }
}
