import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';
@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ AccountService ]
} )
export class AppComponent implements OnInit {
	accounts: { name: string, status: string }[] = [];
	constructor ( private accountsService: AccountService ) {
		console.log( 'accountsService: ', accountsService );
		console.log( 'this.accounts: ', this.accounts );
	}
	ngOnInit () {
		this.accounts = this.accountsService.accounts;
		console.log( 'this.accounts: ', this.accounts );
	}
}
