import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneirodeleteComponent } from './janeirodelete.component';

describe('JaneirodeleteComponent', () => {
  let component: JaneirodeleteComponent;
  let fixture: ComponentFixture<JaneirodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaneirodeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaneirodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
