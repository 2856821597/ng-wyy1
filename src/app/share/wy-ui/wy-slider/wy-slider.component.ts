import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/internal/Operators';

@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class WySliderComponent implements OnInit {
  @Input() wyvertical = false;
  private sliderDom: HTMLDivElement;
  @ViewChild('wySlider', { static: true}) wySlider: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('el' , this.wySlider.nativeElement);
    this.sliderDom = this.wySlider.nativeElement;
    this.createDragginObservable();
  }
   private createDragginObservable() {
        const orientField = this.wyvertical ? 'pagY' : 'pageX';
        const mouse = {
          start: 'mousedown',
          move: 'mousemove',
          end: 'mouseup',
          filter: (e: Event) => e instanceof MouseEvent,
          pluckKey: [orientField]
        };
        const touch = {
          start: 'touchstart',
          move: 'touchmove',
          end: 'touchend',
          filter: (e: Event) => e instanceof MouseEvent,
          pluckKey: ['touches', '0', orientField]
        };
        // [mouse, touch].forEach( source => {
        //   const { start, move, end, filter, pluckKey} = source;
        //   fromEvent(this.sliderDom, start)
        //   .pipe(
        //    filter(filter),
        //    tap((e: Event) => {
        //     e.stopPropagation();
        //     e.preventDefault();
        //   }),
        //   pluck(...pluckKey)
        //   map((position: Number) => this.findCloseestValue(position))
        //   );
        // });
  }

}
