import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-type/common.service';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerService } from 'src/app/services/singer.service';

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
    private homeService: HomeService,
    private singerService: SingerService
    ) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalSheetList();
    this.getEnterSingers();
  }
  private getBanners() {
    this.homeService.getBanners().subscribe( banners =>
      // console.log('banners:', banners)
      this.banners = banners
   );
  }
  private getHotTags() {
    this.homeService.getHotTag().subscribe( tags =>
      // console.log('tags:', tags)
      this.hotTags = tags
   );
  }
  // 歌单
  private getPersonalSheetList() {
    this.homeService.getPersonalSheetList().subscribe( result =>
      // console.log('result:', result)
      this.songSheetList = result
   );
  }
  // 歌手
  private getEnterSingers() {
    this.singerService.getEnterSingers().subscribe( singer =>
      // console.log('result:', singer)
      this.singers = singer
   );
  }
  ngOnInit() {
  }



  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
