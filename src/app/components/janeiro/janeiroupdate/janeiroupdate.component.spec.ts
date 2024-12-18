import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneiroupdateComponent } from './janeiroupdate.component';

describe('JaneiroupdateComponent', () => {
  let component: JaneiroupdateComponent;
  let fixture: ComponentFixture<JaneiroupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaneiroupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaneiroupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
