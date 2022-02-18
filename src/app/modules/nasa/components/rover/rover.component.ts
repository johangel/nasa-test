import { Component, Input, OnInit } from '@angular/core';
import { IRover } from '../../models/nasa-rockets.models';

@Component({
	selector: 'app-rover',
	templateUrl: './rover.component.html',
	styleUrls: ['./rover.component.scss'],
})
export class RoverComponent {
	@Input() rover!: IRover;
	constructor() {
		console.log(this.rover);
	}
}
