import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreCadastroComponent } from './form-pre-cadastro.component';

describe('FormPreCadastroComponent', () => {
  let component: FormPreCadastroComponent;
  let fixture: ComponentFixture<FormPreCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPreCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
