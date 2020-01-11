import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingSheetComponent } from './sing-sheet/sing-sheet.component';
import { PlayCountPipe } from '../play-count.pipe';



@NgModule({
  declarations: [SingSheetComponent, PlayCountPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SingSheetComponent,
    PlayCountPipe
  ]
})
export class WyUiModule { }
