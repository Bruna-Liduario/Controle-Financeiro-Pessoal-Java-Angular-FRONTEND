import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneiroreadComponent } from './janeiroread.component';

describe('JaneiroreadComponent', () => {
  let component: JaneiroreadComponent;
  let fixture: ComponentFixture<JaneiroreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaneiroreadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaneiroreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
