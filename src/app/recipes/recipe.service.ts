import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hurmasice', 
            'Iste ko kod nane :)', 
            'https://www.recepti.hr/upload/imagecache/clanak/964721_544709102241976_1238885539_o_0.jpg',
            [
                new Ingredient('Brasno', 2),
                new Ingredient('Secer', 3)
            ]
        ),
        new Recipe(
            'Baklave', 
            'Bolje baklave do Stanbula nema!', 
            'https://stil.kurir.rs/data/images/2016/09/13/21/96610_baklava-profimedia_ls.jpg',
            [
                new Ingredient('Jufke', 1),
                new Ingredient('Orasi', 2)
            ]
        )
      ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    public GetRecipe() {
        return this.recipes.slice();
    } 

    public addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }


    
}