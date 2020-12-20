import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from '../auth.service';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { objLoan, UtilsService } from '../utils.service';

@Component({
  selector: 'app-dialog-novo-emprestimo',
  templateUrl: './dialog-novo-emprestimo.component.html',
  styleUrls: ['./dialog-novo-emprestimo.component.scss']
})
export class DialogNovoEmprestimoComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  emprestimo_valor;
  loading = false;
  loading2 = false;

  selected = null;

  resultados = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {

    },
    public dialogRef: MatDialogRef<DialogNovoEmprestimoComponent>,
    private utilsService: UtilsService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {

    if (!this.emprestimo_valor) {
      return;
    }

    this.loading = true;
    this.resultados = [];
    this.selected = null;


    console.log(this.authService.usuario_logado);

    this.utilsService.buscaBancos(this.authService.usuario_logado.user.benefitType, this.emprestimo_valor).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.loading = false;
        this.resultados = res;
      }, 1000);
    }, (err) => {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });

  }


  escolher() {

    let renda = this.authService.usuario_logado.user.income;
    let banco = this.resultados.find(el => el.name === this.selected);
    let loan: objLoan = new objLoan();
    loan.owner = this.authService.usuario_logado.user._id;
    loan.numInstallments = banco.numInstallments;
    loan.installmentValue = banco.installmentValue;
    loan.bankName = banco.name;
    loan.bankImage = banco.image;
    loan.interestRate = banco.interestRate;
    loan.value = this.emprestimo_valor;

    // verifica se esta dentro da margem

    let margem = (loan.installmentValue / renda);

    if (margem > 0.3) {
      this.margemAlta(0.3 * renda);
      return;
    }

    this.loading2 = true;

    this.utilsService.solicitaEmprestimo(loan).subscribe(res => {
      setTimeout(() => {
        this.loading2 = false;
        this.close(true);
      }, 1000)
    }, err => {
      setTimeout(() => {
        console.log(err);
        this.loading2 = false;
      }, 1000)
    })
  }

  margemAlta(parcelaMax) {

    const dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        warning: true,
        title: 'Margem excedida!',
        text: 'Este valor ultrapassa o limite de 30% da sua renda. Escolha uma opção com parcelas de até R$ ' + parcelaMax.toFixed(2).toString().replace(".", ","),
        btnText: 'Fechar'
      }
    });

  }


  close(enviado?): void {
    this.dialogRef.close({
      enviado
    });
  }
}
