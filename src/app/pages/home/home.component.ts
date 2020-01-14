import { Component, OnInit, ViewChild } from '@angular/core';

import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-type/common.service';
import { NzCarouselComponent } from 'ng-zorro-antd';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/Operators';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
 banners: Banner[];
 hotTags: HotTag[];
 songSheetList: SongSheet[];
 singers: Singer[];
 carouselActiveIndex = 0;
  @ViewChild(NzCarouselComponent, { static: true}) private nzCarousel: NzCarouselComponent;
  constructor(
    private route: ActivatedRoute,
    private sheetService: SheetService
    ) {
    this.route.data.pipe( map(res => res.homeDatas)).subscribe( ([banners, hotTags, songSheetList, singers]) => {
        this.banners = banners;
        this.hotTags = hotTags;
        this.songSheetList = songSheetList;
        this.singers = singers;
      });
  }
  ngOnInit() {
  }


// 轮播图左右箭头
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
  // onPlaySheet
  onPlaySheet(id: number) {
  this.sheetService.playSheet(id).subscribe( res => {
    console.log('res', res);
  });
  }
}
