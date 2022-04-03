import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RacersComponent } from './racers/racers.component';
import { RaceOutcomeComponent } from './race-outcome/race-outcome.component';
import { RaceVisualizerComponent } from './race-visualizer/race-visualizer.component';

@NgModule({
	declarations: [
		AppComponent,
		RacersComponent,
		RaceOutcomeComponent,
		RaceVisualizerComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
