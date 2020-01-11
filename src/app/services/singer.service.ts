import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/Operators';
import { Singer } from './data-type/common.service';
import queryString from 'query-string';
interface SingParams {
  offset: number;
  limit: number;
  cat?: string;
}
const defaultParams: SingParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};
@Injectable({
  providedIn: ServicesModule
})
export class SingerService {
  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) {  }
  //
  getEnterSingers(args: SingParams = defaultParams): Observable<Singer[]> {
      const params = new HttpParams({ fromString: queryString.stringify(args) });
      return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: { artists: Singer[]}) =>
         res.artists
      ));
  }



}
