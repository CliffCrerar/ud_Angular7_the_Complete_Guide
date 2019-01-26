import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{type:'server',name:'Testserver',content:'Just a test!'}];
	newServerName = '';
	newServerContent = '';

	onServerAdded(serverData:{serverName:string,serverContent:string}){
		console.log('serverData: ', serverData);
		this.serverElements.push({
			type:'server',
			name:serverData.newServerName,
			content: serverData.newServerContent,
		});
	}
	onBluePrintAdded(bluePrintData:{serverName:string,serverContent:string}){
		this.serverElements.push({
			type: 'blueprint',
			name: bluePrintData.newServerName,
			content: bluePrintData.newServerContent
		})
	}
}
