import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingSheetComponent } from './sing-sheet/sing-sheet.component';
import { PlayCountPipe } from '../play-count.pipe';
import { WyPlayerModule } from './wy-player/wy-player.module';

@NgModule({
  declarations: [SingSheetComponent, PlayCountPipe],
  imports: [
    CommonModule,
    WyPlayerModule
  ],
  exports: [
    SingSheetComponent,
    PlayCountPipe,
    WyPlayerModule  ]
})
export class WyUiModule { }
