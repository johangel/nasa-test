import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../models/nasa-rockets.models';
import { NasaService } from '../../services/nasa.services';

@Component({
	selector: 'app-rover-photos-list',
	templateUrl: './rover-photo-list.component.html',
	styleUrls: ['./rover-photo-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class RoverPhotosComponent {
	@Input() photos: Photo[] = [];
	constructor(public nasaService: NasaService) {
		console.log(this.photos);
	}
}
