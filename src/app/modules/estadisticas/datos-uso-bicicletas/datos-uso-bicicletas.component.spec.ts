import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsoBicicletasComponent } from './datos-uso-bicicletas.component';

describe('DatosUsoBicicletasComponent', () => {
  let component: DatosUsoBicicletasComponent;
  let fixture: ComponentFixture<DatosUsoBicicletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUsoBicicletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsoBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
