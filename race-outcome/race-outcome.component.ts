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
	legText?: string; //Each leg of the race will overwrite this.
	
	ngOnInit(): void {
	}
	
	start_next_leg(): void{
		if(this.currentLeg == 0){
			this.legText = this.create_starting_text();
		}
		else{
			this.legText = 'Wow, an unprecedented all-way tie! Friendship wins, everybody!';
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
	//Quick programming note, folks. We have some disqualified racers. ____, ____, and ____ will not be participating.
}
