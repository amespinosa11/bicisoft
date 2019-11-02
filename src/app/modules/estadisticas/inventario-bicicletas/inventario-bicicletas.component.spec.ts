import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioBicicletasComponent } from './inventario-bicicletas.component';

describe('InventarioBicicletasComponent', () => {
  let component: InventarioBicicletasComponent;
  let fixture: ComponentFixture<InventarioBicicletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioBicicletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
