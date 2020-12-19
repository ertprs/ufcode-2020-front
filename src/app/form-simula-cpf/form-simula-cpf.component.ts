import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-simula-cpf',
  templateUrl: './form-simula-cpf.component.html',
  styleUrls: ['./form-simula-cpf.component.scss']
})
export class FormSimulaCpfComponent implements OnInit {

  banco;
  usuario_cpf;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      banco
    },
    public dialogRef: MatDialogRef<FormSimulaCpfComponent>
  ) {

    this.banco = data.banco;

  }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close({

    });
  }

  verificaCPF() {
    this.dialogRef.close({
      verificar: true,
      cadastrar: true,
      usuario_cpf: this.usuario_cpf,
    });
  }
}
