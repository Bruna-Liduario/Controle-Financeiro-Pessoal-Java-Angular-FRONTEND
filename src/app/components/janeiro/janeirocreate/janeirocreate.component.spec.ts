import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneirocreateComponent } from './janeirocreate.component';

describe('JaneirocreateComponent', () => {
  let component: JaneirocreateComponent;
  let fixture: ComponentFixture<JaneirocreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaneirocreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaneirocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
