import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradadeleteComponent } from './entradadelete.component';

describe('EntradadeleteComponent', () => {
  let component: EntradadeleteComponent;
  let fixture: ComponentFixture<EntradadeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradadeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradadeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
