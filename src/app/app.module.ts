import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaModule } from './modules/nasa/nasa.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NasaModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatSelectModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
