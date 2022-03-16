import { Injectable } from '@angular/core';
import { Racer } from './racer';
import { RacersComponent } from './racers/racers.component';

@Injectable({
	providedIn: 'root'
})
export class RacersService {
	racers:Racer[] = [];
	constructor() {}
	
	add_racer(racerName: string, mod: number): boolean {
		if (this.racers.length < 10){
			const racer: Racer = {name: racerName, modifier: mod, disqualified: false};
			this.racers.push(racer);
			return true;
		}
		else{
			return false;
		}
	}
}
