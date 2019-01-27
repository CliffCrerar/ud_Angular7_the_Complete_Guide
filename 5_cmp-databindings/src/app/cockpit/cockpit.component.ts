import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: [
		'./cockpit.component.css',
	],
})
export class CockpitComponent implements OnInit {
	@Output()
	serverCreated = new EventEmitter<{
		serverName: string;
		serverContent: string;
	}>();
	@Output()
	bluePrintCreated = new EventEmitter<{
		serverName: string;
		serverContent: string;
	}>();
	//serverName = '';
	//serverContent = '';
	//@ViewChild(CockpitComponent) serverContentInput;
	@ViewChild('serverContentInput') serverContentInput: ElementRef;

	constructor () {}

	ngOnInit () {}

	onAddServer (nameInput: HTMLInputElement) {
		console.log('nameInput: ', nameInput.value);
		console.log('this.ServerContentInput: ', this.serverContentInput.nativeElement);
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value,
		});
	}

	onAddBlueprint (nameInput: HTMLInputElement) {
		this.serverContentInput.nativeElement.value = 'Someval'; // dont do this!
		console.log('nameInput: ', nameInput.value);
		console.log('this.ServerContentInput: ', this.serverContentInput.nativeElement);
		this.bluePrintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value,
		});
	}
}
