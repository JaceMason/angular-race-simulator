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
	
	ngOnInit(): void {
	}
}
