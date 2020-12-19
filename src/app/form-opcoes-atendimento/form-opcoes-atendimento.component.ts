import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-opcoes-atendimento',
  templateUrl: './form-opcoes-atendimento.component.html',
  styleUrls: ['./form-opcoes-atendimento.component.scss']
})
export class FormOpcoesAtendimentoComponent implements OnInit {

  user_senha;
  usuario_cpf;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      success?;
      error?;
      warning?;
      title?;
      text?;
      btnText?;
      dialogQuestion?;
    },
    public dialogRef: MatDialogRef<FormOpcoesAtendimentoComponent>
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close({
      
    });
  }

  
}
