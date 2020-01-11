import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingSheetComponent } from './sing-sheet.component';

describe('SingSheetComponent', () => {
  let component: SingSheetComponent;
  let fixture: ComponentFixture<SingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
