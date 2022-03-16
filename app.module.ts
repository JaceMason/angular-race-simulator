import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RacersComponent } from './racers/racers.component';
import { RaceOutcomeComponent } from './race-outcome/race-outcome.component';

@NgModule({
	declarations: [
		AppComponent,
		RacersComponent,
		RaceOutcomeComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
