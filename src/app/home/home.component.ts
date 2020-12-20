import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
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

  @ViewChild('panel') panel: ElementRef;

  resultadosEncontrados = [

  ]

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.preCadastro();
    // this.opcoesAtendimento();
    // this.router.navigateByUrl('/dashboard');

  }

  scroll(): void {
    setTimeout(() => {
      try {
        this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (err) {
        this.panel.nativeElement.scrollIntoView();
      }
    }, 250);
  }

  solicitar() {

    if (!this.emprestimo_valor || !this.convenio) {
      return false;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.scroll();


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
        // apenas se preenchido
        this.opcoesAtendimento(result.enderecoCep);
      }
    });
  }


  opcoesAtendimento(enderecoCep) {
    const dialogRef = this.dialog.open(FormOpcoesAtendimentoComponent, {
      data: {
        enderecoCep
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.agendou && result.acao === 'ligacao') {
        this.showAlertConfirma('Ligação agendada!', 'Entraremos em contato em breve.', 'Fechar');
      } else if (result && result.agendou && result.acao === 'visita') {
        this.showAlertConfirma('Visita agendada!', 'Estamos esperando por você.', 'Fechar');
      } else {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }


  showAlertConfirma(title, text, btn): void {
    const dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        success: true,
        title: title,
        text: text,
        btnText: btn
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }



}
