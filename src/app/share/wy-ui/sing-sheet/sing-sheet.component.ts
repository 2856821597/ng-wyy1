import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SongSheet } from 'src/app/services/data-type/common.service';

@Component({
  selector: 'app-sing-sheet',
  templateUrl: './sing-sheet.component.html',
  styleUrls: ['./sing-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingSheetComponent implements OnInit {
@Input() sheet: SongSheet;
  constructor() { }

  ngOnInit() {
  }

}
