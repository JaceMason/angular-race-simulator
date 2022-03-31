import { Component, OnInit } from '@angular/core';
import { RacersService } from '../racers.service';
import { Racer } from '../racer';

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
	orderedRacers: Racer[] = [];
	
	ngOnInit(): void {
	}
	
	start_next_leg(): void{
		if(this.currentLeg > this.lastLeg){
			//Quick safety net just to make sure it does not behave weirdly
			return;
		}
		this.legText = ''; //reset our leg text
		
		if(this.currentLeg == 0){
			this.legText = this.create_starting_text();
		}
		else{
			if(this.currentLeg == 1){
				this.legText = 'And they\'re off!\n';
			}
			//Run the race
			this.racersService.run_race_leg();
			
			//pull out racers and order for position reading
			this.orderedRacers = this.racersService.racers.slice();
			this.orderedRacers.sort(function(a, b){return b.score-a.score;});
			
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
		for(const racer of this.orderedRacers){
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
		let winString = '';
		let win = 0;
		let nwin = 1;
		//Look for ties (check array bounds and then if score is equal)
		while(nwin < this.orderedRacers.length && this.orderedRacers[nwin].score == this.orderedRacers[win].score){
			win++;
			nwin = win+1;
		}
		//There was a tie
		if(win > 0){
			winString += 'Wow! A tie!\n';
			
			for(let i = 0; i <= win; i++){
				if(i > 0){
					if(win > 1){
						if(i == win){
							winString += ', and ';
						}
						else{
							winString += ', ';
						}
					}
					else{
						winString += ' and ';
					}
				}
				
				winString += this.orderedRacers[i].name;
			}

			winString += ' have crossed the finish line at exactly the same time!';
		}
		else{
			winString = `${this.orderedRacers[win].name} is the winner!`;
		}
		return winString;
	}

	//Quick programming note, folks. We have some disqualified racers. ____, ____, and ____ will not be participating.
}
