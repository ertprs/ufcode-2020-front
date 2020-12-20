import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { DialogSenhaComponent } from '../dialog-senha/dialog-senha.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormOpcoesAtendimentoComponent } from '../form-opcoes-atendimento/form-opcoes-atendimento.component';
import { FormPreCadastroComponent } from '../form-pre-cadastro/form-pre-cadastro.component';
import { FormSimulaCpfComponent } from '../form-simula-cpf/form-simula-cpf.component';
import { UtilsService } from '../utils.service';

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

  constructor(private dialog: MatDialog, private router: Router, private utilsService: UtilsService, private authService: AuthService) { }

  ngOnInit(): void {

    this.showAlertSenha();

    this.authService.dadosUser.subscribe(dados => {
      if (dados) {
        this.router.navigateByUrl('dashboard/emprestimos');
      }
    })
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

    this.utilsService.buscaBancos(this.convenio, this.emprestimo_valor).subscribe(res => {
      this.resultadosEncontrados = res;
      this.ofertas = true;
      this.scroll();
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }



  validaCpf(banco) {
    const dialogRef = this.dialog.open(FormSimulaCpfComponent, {
      data: {
        banco
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.verificar) {
        this.usuario_cpf = result.usuario_cpf;
        if (result.cadastrar) {
          this.preCadastro();

          // .... salva as informacoes pre state .....
          this.authService.banco_pre_selecionado = banco;
          this.authService.benefit_pre_selecionado = this.convenio;
          this.authService.valor_pre_selecionado = this.emprestimo_valor;
          // .........

        } else {
          this.login(true);
        }
      }
    });
  }

  login(tentouSimular?) {
    const dialogRef = this.dialog.open(FormLoginComponent, {
      data: {
        tentouSimular,
        usuario_cpf: this.usuario_cpf
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


  showAlertSenha(): void {
    const dialogRef = this.dialog.open(DialogSenhaComponent, {
      data: {
      }
    });

  }


}
