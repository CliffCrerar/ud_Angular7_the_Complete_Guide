import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';
@Component( {
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: [ './new-account.component.css' ],
	providers: [ LoggingService ]
} )
export class NewAccountComponent {
	constructor ( private loggingService: LoggingService, private accountService: AccountService ) {
		console.log( 'AccountService 1: ', accountService );
	}
	onCreateAccount ( accountName: string, accountStatus: string ) {
		this.accountService.addAccount( accountName, accountStatus );
		this.loggingService.logStatusChange( accountStatus );
		console.log( 'NEW ACCOUNTS 2: ', this.accountService );
	}
}
