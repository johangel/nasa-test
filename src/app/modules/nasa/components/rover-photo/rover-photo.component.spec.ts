import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { RoverPhotoComponent } from './rover-photo.component';

const DUMMIE_PHOTO = {
	camera: { id: 29, name: 'NAVCAM', rover_id: 7, full_name: 'Navigation Camera' },
	earth_date: '2006-10-27',
	id: 301536,
	img_src: 'http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215136972EDNAS00P1585L0M1-BR.JPG',
	rover: {
		id: 7,
		landing_date: '2004-01-04',
		launch_date: '2003-06-10',
		name: 'Spirit',
		status: 'complete',
	},
	sol: 1000,
};

describe('RocketPhotoComponent', () => {
	let component: RoverPhotoComponent;
	let fixture: ComponentFixture<RoverPhotoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatCardModule],
			declarations: [RoverPhotoComponent],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RoverPhotoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should render the name of the rover camera', () => {
		fixture.componentInstance.roverPhoto = DUMMIE_PHOTO;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('mat-card-title').textContent).toEqual(
			'Navigation Camera',
		);
	});
});
