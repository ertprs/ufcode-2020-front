import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoEmprestimoComponent } from './dialog-novo-emprestimo.component';

describe('DialogNovoEmprestimoComponent', () => {
  let component: DialogNovoEmprestimoComponent;
  let fixture: ComponentFixture<DialogNovoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNovoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
