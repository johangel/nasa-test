import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Photo, IRover } from '../models/nasa-rockets.models';

interface PhotoServiceResponse {
	photos: Photo[];
}

@Injectable({ providedIn: 'root' })
export class NasaService {
	constructor(private httpClient: HttpClient) {}

	readonly NASA_KEY = 'nOQvzkm0LoBPxidFdTAuqagel9jiljAOWoeyiPdY';

	getRocket(roverName: string = 'spirit'): Observable<IRover> {
		return this.httpClient
			.get<PhotoServiceResponse>(
				`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${this.NASA_KEY}`,
			)
			.pipe(map((response) => ({ name: roverName, photos: response.photos })));
	}
}
