import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-form-opcoes-atendimento',
  templateUrl: './form-opcoes-atendimento.component.html',
  styleUrls: ['./form-opcoes-atendimento.component.scss']
})
export class FormOpcoesAtendimentoComponent implements OnInit {

  user_senha;
  usuario_cpf;

  opcao_atendimento;
  horarios_ligacao = ['Manhã', 'Tarde', 'Noite'];
  unidades = ['Empresta BH Afonso Pena', 'Empresta BH Tupinambás', 'Empresta BH Praça 7']

  escolhido = false;
  loading = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

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
  ) { }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close({

    });
  }

  selecionar(op) {
    this.opcao_atendimento = op;
  }

  continuar() {
    this.escolhido = true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close({
        agendou: true,
        acao: this.opcao_atendimento
      });
    }, 1000);
  }

}
