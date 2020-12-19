import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOpcoesAtendimentoComponent } from './form-opcoes-atendimento.component';

describe('FormOpcoesAtendimentoComponent', () => {
  let component: FormOpcoesAtendimentoComponent;
  let fixture: ComponentFixture<FormOpcoesAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOpcoesAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOpcoesAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
