import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastofixoupdateComponent } from './gastofixoupdate.component';

describe('GastofixoupdateComponent', () => {
  let component: GastofixoupdateComponent;
  let fixture: ComponentFixture<GastofixoupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastofixoupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastofixoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
