import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeroComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}


