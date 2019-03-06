import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component( {
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
} )
export class UserComponent implements OnInit, OnDestroy {
	private user: { id: number, name: string };
	private paramsSubscription: Subscription
	constructor ( private route: ActivatedRoute ) { }
	ngOnInit () {
		console.log( 'this.route: ', this.route );
		console.log( 'this.route.snapshot.params: ', this.route.snapshot.params );
		// Params is an observable
		// Best practice for dynamic routing
		this.user = {
			id: this.route.snapshot.params[ 'id' ],
			name: this.route.snapshot.params[ 'name' ],
		};
		this.route.params.subscribe(
			( params: Params ) => {
				this.user.id = params[ 'id' ];
				this.user.name = params[ 'name' ];
			}
		)
	}

	// Accessing the subscription
	// In this case this is an unsubscription that is done by angular automatically
	// To do this is a extra measure but paramsSubscription in this case of type Subscription is how you may access a subscription
	ngOnDestroy () {
		//	this.paramsSubscription.unsubscribe();
	}
}

/**
 * FOOTNOTE:
 * Observables is not a native to angular but added by a third party package that is heavily used by angular.
 * RXJS is the package that supplies the observable functionalituy.
*/
