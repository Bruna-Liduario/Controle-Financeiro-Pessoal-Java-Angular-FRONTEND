import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastofixoreadComponent } from './gastofixoread.component';

describe('GastofixoreadComponent', () => {
  let component: GastofixoreadComponent;
  let fixture: ComponentFixture<GastofixoreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastofixoreadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastofixoreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
