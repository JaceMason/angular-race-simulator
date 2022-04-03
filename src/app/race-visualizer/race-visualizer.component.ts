import { Component, OnInit, Input } from '@angular/core';
import { Racer } from '../racer';
import { RacersService } from '../racers.service';

@Component({
	selector: 'app-race-visualizer',
	templateUrl: './race-visualizer.component.html',
	styleUrls: ['./race-visualizer.component.css']
})
export class RaceVisualizerComponent implements OnInit {

	@Input() currentLeg = 1;
	@Input() lastLeg = 5;
	@Input() orderedRacers: Racer[] = [];
	
	trackWidth = 1000;
	constructor(public racersService: RacersService) { }

	calculate_width(racer: Racer):Number{
		//Avoid divisions by 0 and undefined orderedRacers before race start
		if(!this.orderedRacers[0] || this.orderedRacers[0].score == 0 || this.lastLeg == 0){
			return 0;
		}
		else{
			return (racer.score/this.orderedRacers[0].score)*this.trackWidth*(this.currentLeg/this.lastLeg);
		}
	}
	
	ngOnInit(): void {
	}
}
