import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroTiemposComponent } from './tablero-tiempos.component';

describe('TableroTiemposComponent', () => {
  let component: TableroTiemposComponent;
  let fixture: ComponentFixture<TableroTiemposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroTiemposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroTiemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
