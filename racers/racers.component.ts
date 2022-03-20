import { Component, OnInit } from '@angular/core';
import { Racer } from '../racer';
import { RacersService } from '../racers.service';

@Component({
	selector: 'app-racers',
	templateUrl: './racers.component.html',
	styleUrls: ['./racers.component.css']
})
export class RacersComponent implements OnInit {

	racers:Racer[] = [];
	constructor(public racersService: RacersService) { }
	
	ngOnInit(): void {
		this.racersService.add_racer('Brian\'s Fast', 2);
		this.racersService.add_racer('The Wizard', 6);
		this.racersService.add_racer('Potoooooooo', 6);
	}
	
	add_racer(racerName: string, mod: number): boolean {
		return this.racersService.add_racer(racerName, mod);
		
	}
	dq_racer(racer: Racer) {
		racer.disqualified = true;
	}
	

}
/*
Tip: Remember, the more legs of the race there are, the more likely it will be that racers with higher modifiers win.
Tip: Modifiers can be changed between race legs just in case the players... 'help' out a racer.
*/
