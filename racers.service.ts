import { Injectable } from '@angular/core';
import { Racer } from './racer';

@Injectable({
	providedIn: 'root'
})
export class RacersService {
	racers:Racer[] = [];
	constructor() {}
		
	roll_d20(): number { //generate number between 1 and 20
		return(Math.floor(Math.random() * 20) + 1);
	}

	run_race_leg():void{
		for(const racer of this.racers){
			const roll = this.roll_d20();	
			if(roll == 1){
				racer.score -=6;
			}
			else if(roll == 20){
				racer.score += 5;
			}
			racer.score += roll+racer.modifier;
			racer.lastRoll = roll;//Need to check for Nat20 or Nat1
		}
	}
	
	add_racer(racerName: string, mod: number): boolean {
		if (this.racers.length < 10){
			const racer: Racer = {name: racerName, modifier: mod, disqualified: false, score: 0, lastRoll: 0};
			this.racers.push(racer);
			return true;
		}
		else{
			return false;
		}
	}
}
