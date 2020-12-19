import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormSimulaCpfComponent } from '../form-simula-cpf/form-simula-cpf.component';

@Component({
  selector: 'app-form-pre-cadastro',
  templateUrl: './form-pre-cadastro.component.html',
  styleUrls: ['./form-pre-cadastro.component.scss']
})
export class FormPreCadastroComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      usuario_cpf,
      emprestimo_valor
    },
    public dialogRef: MatDialogRef<FormSimulaCpfComponent>
  ) {


  }

  ngOnInit(): void {
    this.form = new FormGroup({
      usuario_nome: new FormControl(null, Validators.required),
      usuario_cpf: new FormControl(this.data.usuario_cpf, Validators.required),
      usuario_celular: new FormControl(null, Validators.required),
      usuario_email: new FormControl(null, Validators.required),
      usuario_cep: new FormControl(null, Validators.required),
      emprestimo_valor: new FormControl(this.data.emprestimo_valor, Validators.required),
    })
  }

  preCadastro() {

  }

  close(): void {
    this.dialogRef.close({

    });
  }



}
