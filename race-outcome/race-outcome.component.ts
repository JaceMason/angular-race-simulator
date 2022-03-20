import { Component, OnInit } from '@angular/core';
import { RacersService } from '../racers.service';

@Component({
	selector: 'app-race-outcome',
	templateUrl: './race-outcome.component.html',
	styleUrls: ['./race-outcome.component.css']
})

export class RaceOutcomeComponent implements OnInit {

	constructor(public racersService: RacersService) { }

	currentLeg = 0;
	lastLeg = 5;
	legText?: string; //Each leg of the race will overwrite this.
	
	ngOnInit(): void {
	}
	
	start_next_leg(): void{
		if(this.currentLeg > this.lastLeg){
			//Quick safety net just to make sure it does not behave weirdly
			return;
		}
		this.legText = '';
		if(this.currentLeg == 0){
			this.legText = this.create_starting_text();
		}
		else{
			if(this.currentLeg == 1){
				this.legText = 'And they\'re off!\n';
			}
			//Run the race and display the leg results
			this.racersService.run_race_leg();
			this.legText += this.create_leg_text();

			//If we hit the end, display the race results
			if(this.currentLeg == this.lastLeg){
				
				this.legText += this.create_result_text();
			}

			
		}
		this.currentLeg++;
	}
	
	create_starting_text(): string{
		let startText = 'Alright folks, we have all racers on their marks!\n';
		
		for(const racer of this.racersService.racers){
			startText += racer.name;
			startText += '\n';
		}
		return startText;
	}

	create_leg_text(): string{
		let legText = '';
		for(const racer of this.racersService.racers){
			legText += `${racer.name}\n`;
			if(racer.lastRoll == 20){
				legText += `Wow just look at fighting spirit from ${racer.name}! They've burst ahead!\n`;
			}
			else if(racer.lastRoll == 1){
				legText += `Oh no! ${racer.name} has stumbled on their feet! That's going to cost them!\n`;
			}
			legText += `\tRolled: ${racer.lastRoll}\n`;
			legText += `\tTotal: ${racer.score}\n\n`;
		}
		return legText;
	}

	create_result_text(): string{
		//TODO: check for ties later when the array gets sorted.
		let highest = this.racersService.racers[0];
		for(const racer of this.racersService.racers){
			if(racer.score > highest.score){
				highest = racer;
			}
		}
		return(`${highest.name} is the winner!`);
	}
	//Quick programming note, folks. We have some disqualified racers. ____, ____, and ____ will not be participating.
}
