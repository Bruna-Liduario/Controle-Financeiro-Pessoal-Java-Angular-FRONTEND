import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaupdateComponent } from './entradaupdate.component';

describe('EntradaupdateComponent', () => {
  let component: EntradaupdateComponent;
  let fixture: ComponentFixture<EntradaupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradaupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
