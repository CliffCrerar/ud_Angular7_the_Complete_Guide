import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component( {
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [
		'./shopping-edit.component.css',
	],
} )
export class ShoppingEditComponent implements OnInit {
	@ViewChild( 'name' ) inputName: ElementRef;
	@ViewChild( 'quantity' ) qtyInput: ElementRef;
	@Output() ingredientAdded = new EventEmitter<Ingredients>();

	constructor () {
	}

	ngOnInit () { }

	onAddItem () {
		// console.log( 'inputName: ', this.inputName.nativeElement.value );
		// console.log( 'qtyInput: ', this.qtyInput.nativeElement.value );
		const name = this.inputName.nativeElement.value;
		const quantity = this.qtyInput.nativeElement.value;
		const newIngredient = new Ingredients( name, Number( quantity ) );
		console.log( 'newIngredient: ', newIngredient );
		this.ingredientAdded.emit( newIngredient );
	}
}
