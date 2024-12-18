import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastofixocreateComponent } from './gastofixocreate.component';

describe('GastofixocreateComponent', () => {
  let component: GastofixocreateComponent;
  let fixture: ComponentFixture<GastofixocreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastofixocreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastofixocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
