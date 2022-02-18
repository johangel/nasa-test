import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/nasa-rockets.models';

@Component({
	selector: 'app-rover-photo',
	templateUrl: './rover-photo.component.html',
	styleUrls: ['./rover-photo.component.scss'],
})
export class RoverPhotoComponent {
	@Input() roverPhoto!: Photo;

	constructor() {}
}
