import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrogastofixoComponent } from './cadastrogastofixo.component';

describe('CadastrogastofixoComponent', () => {
  let component: CadastrogastofixoComponent;
  let fixture: ComponentFixture<CadastrogastofixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrogastofixoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrogastofixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
