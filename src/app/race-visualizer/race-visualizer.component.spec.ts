import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceVisualizerComponent } from './race-visualizer.component';

describe('RaceVisualizerComponent', () => {
	let component: RaceVisualizerComponent;
	let fixture: ComponentFixture<RaceVisualizerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ RaceVisualizerComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RaceVisualizerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
