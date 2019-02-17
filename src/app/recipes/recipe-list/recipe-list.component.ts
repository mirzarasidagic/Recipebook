import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hurmasice', 'Iste ko kod nane :)', 'https://www.recepti.hr/upload/imagecache/clanak/964721_544709102241976_1238885539_o_0.jpg'),
    new Recipe('Baklave', 'Bolje baklave do Stanbula nema!', 'https://stil.kurir.rs/data/images/2016/09/13/21/96610_baklava-profimedia_ls.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
