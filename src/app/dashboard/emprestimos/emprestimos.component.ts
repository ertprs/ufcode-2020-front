import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DialogAlertComponent } from 'src/app/dialog-alert/dialog-alert.component';
import { DialogNovoEmprestimoComponent } from 'src/app/dialog-novo-emprestimo/dialog-novo-emprestimo.component';
import { objLoan, UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {

  constructor(private authService: AuthService, private utilsService: UtilsService, private router: Router, private dialog: MatDialog) { }

  emprestimos = [];

  ngOnInit(): void {
    this.authService.dadosUser.subscribe(user => {
      if (user && user.user && user.user.isLead) {
        this.router.navigateByUrl('dashboard/cadastro-completo');
      } else if (user && user.user) {
        this.utilsService.emprestimos.subscribe(emp => {
          if (emp) {
            this.emprestimos = emp;
            console.log(emp);
          }
        });

        this.utilsService.buscaEmprestimos(this.authService.usuario_logado).subscribe();
      }
    })
  }

  novoEmprestimo() {
    const dialogRef = this.dialog.open(DialogNovoEmprestimoComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.enviado) {
        this.funcionou();
      }
    });
  }

  getColor(status) {
    switch (status) {
      case 'in_progress': {
        return 'gray'
      }
      case 'approved': {
        return 'darkgreen'
      }
      case 'dennied': {
        return 'darkred'
      }
    }
  }

  getStatus(status) {
    switch (status) {
      case 'in_progress': {
        return 'Em andamento'
      }
      case 'approved': {
        return 'Empréstimo aprovado'
      }
      case 'dennied': {
        return 'Empréstimo negado'
      }
    }
  }

  funcionou() {

    this.utilsService.buscaEmprestimos(this.authService.usuario_logado).subscribe();

    const dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        success: true,
        title: 'Solicitação enviada',
        text: 'Pode relaxar! Assim que tivermos uma resposta vamos te avisar no WhatsApp.',
        btnText: 'Fechar'
      }
    });
  }

}
