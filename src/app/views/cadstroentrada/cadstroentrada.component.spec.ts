import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstroentradaComponent } from './cadstroentrada.component';

describe('CadstroentradaComponent', () => {
  let component: CadstroentradaComponent;
  let fixture: ComponentFixture<CadstroentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadstroentradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadstroentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
