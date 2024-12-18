import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradareadComponent } from './entradaread.component';

describe('EntradareadComponent', () => {
  let component: EntradareadComponent;
  let fixture: ComponentFixture<EntradareadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradareadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradareadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
