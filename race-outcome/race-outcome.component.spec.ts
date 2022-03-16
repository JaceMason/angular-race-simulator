import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceOutcomeComponent } from './race-outcome.component';

describe('RaceOutcomeComponent', () => {
	let component: RaceOutcomeComponent;
	let fixture: ComponentFixture<RaceOutcomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ RaceOutcomeComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RaceOutcomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
