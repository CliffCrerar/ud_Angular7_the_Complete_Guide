import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component( {
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: [
		'./shopping-list.component.css',
	],
} )
export class ShoppingListComponent implements OnInit {
	ingredients = [
		new Ingredients( 'Apples', 5 ),
		new Ingredients( 'Tomatos', 10 ),
	];


	constructor () { }

	ngOnInit () { }

	onIngredientAdded ( newIngredient: Ingredients ) {
		console.log( 'newIngredient: ', newIngredient );
		console.log( 'newIngredient: ', newIngredient );
		this.ingredients.push( newIngredient );
	}
}
