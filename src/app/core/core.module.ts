import { NgModule, SkipSelf, Optional } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
// import { AppComponent } from '../app.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ShareModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('coreModule 只能被appModule引用');
    }

  }
}
