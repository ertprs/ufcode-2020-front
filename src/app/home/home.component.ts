import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormOpcoesAtendimentoComponent } from '../form-opcoes-atendimento/form-opcoes-atendimento.component';
import { FormPreCadastroComponent } from '../form-pre-cadastro/form-pre-cadastro.component';
import { FormSimulaCpfComponent } from '../form-simula-cpf/form-simula-cpf.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  convenios = ['inss', 'federal', 'estadual']
  ofertas = false;
  loading = true;

  emprestimo_valor = null;
  convenio = null;

  usuario_cpf = null;
  user_senha = null;


  resultadosEncontrados = [

  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.preCadastro();
  }

  solicitar() {

    if (!this.emprestimo_valor || !this.convenio) {
      return false;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 200);
    this.ofertas = true;
    this.resultadosEncontrados = [{
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/pan.png',
      banco_nome: 'Banco PAN',
      banco_valor: this.emprestimo_valor,
      banco_taxa: "1,80%"
    },

    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828114119png',
      banco_nome: 'Banco Bmg',
      banco_valor: this.emprestimo_valor,
      banco_taxa: "1,80%"
    },
    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122302png',
      banco_nome: 'Banco Bradesco',
      banco_valor: this.emprestimo_valor,
      banco_taxa: "1,80%"
    },
    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122833png',
      banco_nome: 'Banco Itau',
      banco_valor: this.emprestimo_valor,
      banco_taxa: "1,80%"
    }];
  }



  validaCpf(banco) {
    const dialogRef = this.dialog.open(FormSimulaCpfComponent, {
      data: {
        banco
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.verificar && result.cadastrar) {
        this.usuario_cpf = result.usuario_cpf;
        this.preCadastro();
      }
    });
  }

  preCadastro() {
    console.log(this.usuario_cpf);
    const dialogRef = this.dialog.open(FormPreCadastroComponent, {
      data: {
        emprestimo_valor: this.emprestimo_valor,
        usuario_cpf: this.usuario_cpf
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.verificar) {

      }
    });
  }


  opcoesAtendimento() {
    const dialogRef = this.dialog.open(FormOpcoesAtendimentoComponent, {
      data: {

      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.verificar) {

      }
    });
  }

}
