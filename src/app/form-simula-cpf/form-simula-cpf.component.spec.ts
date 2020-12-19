import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimulaCpfComponent } from './form-simula-cpf.component';

describe('FormSimulaCpfComponent', () => {
  let component: FormSimulaCpfComponent;
  let fixture: ComponentFixture<FormSimulaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSimulaCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimulaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
