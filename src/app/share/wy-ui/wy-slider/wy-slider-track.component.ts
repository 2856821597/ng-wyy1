import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { WySliderStyle } from './wy-slider.types';


@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]="style"></div>`
})
export class WySliderTrackComponent implements OnInit, OnChanges {
  @Input() wyVertical = false;
  @Input() wyLength: number;
  style: WySliderStyle = {};
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wyVertical) {
      if (this.wyVertical) {
        this.style.height = this.wyLength + '%';
        this.style.width = null;
        this.style.left = null;
      } else {
        this.style.width = this.wyLength + '%';
        this.style.bottom = null;
        this.style.height = null;
      }
    }
  }

}
