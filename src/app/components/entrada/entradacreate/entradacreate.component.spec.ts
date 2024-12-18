import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradacreateComponent } from './entradacreate.component';

describe('EntradacreateComponent', () => {
  let component: EntradacreateComponent;
  let fixture: ComponentFixture<EntradacreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradacreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradacreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
