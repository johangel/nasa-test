import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ROVER_ARRAY } from './modules/nasa/constants/rover-list.constants';
import { IRover } from './modules/nasa/models/nasa-rockets.models';
import { NasaService } from './modules/nasa/services/nasa.services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	rover$!: Observable<IRover>;
	roverList = ROVER_ARRAY;
	initialRover = 'spirit';

	roverForm = new FormGroup({
		rover: new FormControl(this.initialRover, Validators.required),
	});

	constructor(public nasaService: NasaService) {}
	ngOnInit(): void {
		this.fetchRover(this.initialRover);
	}

	public fetchRover(rover: string) {
		this.rover$ = this.nasaService.getRocket(rover);
	}

	title = 'nasa-test';
}
