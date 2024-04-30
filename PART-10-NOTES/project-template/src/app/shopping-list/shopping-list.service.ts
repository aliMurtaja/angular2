import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  // Since here we return brand new array, so if we push new element in `ingredients` later, then it will not effect where we used this array.
  // The reason is that `this.ingredients` and that brand new array is pointing different location of the memory.
  // It has to do with call by value and call by referece.
      // call by reference
          // see:: D:\MURTAJA\LEARNING\Angular_2+\PART-9-NOTES\project-template\src\app\active-users\active-users.component.ts
      // call by value
          // see below(this component)
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // As described above, we need to Inform other component that is using brand new array that new element push by emiting new litener
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
