import { Component, OnInit, TemplateRef, ViewChild, Input, EventEmitter, Output, ChangeDetectionStrategy  } from '@angular/core';


@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  constructor() { }
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;
  ngOnInit() {
  }

  onChangeSlide(type: 'pre' | 'next') {
      this.changeSlide.emit(type);
  }
}
