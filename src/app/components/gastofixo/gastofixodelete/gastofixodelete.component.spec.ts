import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastofixodeleteComponent } from './gastofixodelete.component';

describe('GastofixodeleteComponent', () => {
  let component: GastofixodeleteComponent;
  let fixture: ComponentFixture<GastofixodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastofixodeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastofixodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
