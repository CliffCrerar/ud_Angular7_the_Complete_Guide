import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component( {
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: [
		'./recipe-list.component.css',
	],
} )
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'Recipe 1',
			'this is a test recipe fucker',
			'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg',
		),
		new Recipe(
			'Recipe 2',
			'this is a test recipe fucker',
			'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg',
		),
	]
	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	constructor () { }
	ngOnInit () { }

	onRecipeSelected ( selectedRecipe: Recipe ) {
		//console.log( 'recipe: ', selectedRecipe );
		this.recipeWasSelected.emit( selectedRecipe );
	};
}
