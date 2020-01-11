import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/Operators';
import { Banner, SongSheet, Singer, HotTag } from 'src/app/services/data-type/common.service';

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];
@Injectable({
  providedIn: 'root',
})
export class HomeResolverService implements Resolve<HomeDataType> {

  constructor(   private homeService: HomeService, private singerService: SingerService) { }
   resolve(): Observable<HomeDataType> {
      return  forkJoin([
         this.homeService.getBanners(),
        this.homeService.getHotTag(),
        this.homeService.getPersonalSheetList(),
        this.singerService.getEnterSingers()
       ]).pipe(first());
  }

}
