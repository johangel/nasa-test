import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoverPhotosComponent } from './components/rover-photo-list/rover-photo-list.component';
import { MatCardModule } from '@angular/material/card';
import { NasaService } from './services/nasa.services';
import { RoverPhotoComponent } from './components/rover-photo/rover-photo.component';
import { RoverComponent } from './components/rover/rover.component';

@NgModule({
	imports: [HttpClientModule, CommonModule, MatCardModule],
	exports: [RoverComponent],
	declarations: [RoverPhotosComponent, RoverPhotoComponent, RoverComponent],
	providers: [NasaService],
})
export class NasaModule {}
