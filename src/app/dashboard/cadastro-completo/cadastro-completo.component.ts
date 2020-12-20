import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DialogAlertComponent } from 'src/app/dialog-alert/dialog-alert.component';
import { ProgressBarComponent } from 'src/app/progress-bar/progress-bar.component';
import { respostaCorreio, UtilsService } from 'src/app/utils.service';
import { UserModel } from './user-model';

@Component({
  selector: 'app-cadastro-completo',
  templateUrl: './cadastro-completo.component.html',
  styleUrls: ['./cadastro-completo.component.scss']
})
export class CadastroCompletoComponent implements OnInit {

  currentPage = 0;
  progressPages = ['Informações', 'Endereço', 'Identidade', 'Dados Bancários', 'Senha'];

  estadosCivis = [
    'solteiro',
    'casado',
    'viuvo',
    'divorciado',
    'separado',
  ];

  states = ['AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'];

  banks = [
    '001 – Banco do Brasil S.A.',
    '033 – Banco Santander(Brasil) S.A.',
    '104 – Caixa Econômica Federal',
    '237 – Banco Bradesco S.A.',
    '341 – Banco Itaú S.A.',
    '356 – Banco Real S.A. (antigo)',
    '389 – Banco Mercantil do Brasil S.A.',
    '399 – HSBC Bank Brasil S.A.– Banco Múltiplo',
    '422 – Banco Safra S.A.',
    '453 – Banco Rural S.A.',
    '633 – Banco Rendimento S.A.',
    '652 – Itaú Unibanco Holding S.A.',
    '745 – Banco Citibank S.A.',
  ]

  convenios = ['inss', 'federal', 'estadual']

  formPrimeiro: FormGroup;
  formSegundo: FormGroup;
  formTerceiro: FormGroup;
  formQuarto: FormGroup;
  formQuinto: FormGroup;

  hide1 = true;
  hide2 = true;

  @ViewChild('panel') panel: ElementRef;
  @ViewChild(ProgressBarComponent) progressBarComponent;

  constructor(private router: Router, private authService: AuthService, private utilsService: UtilsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.inicializaForms();
    this.authService.dadosUser.subscribe(user => {
      if (user && user.user && !user.user.isLead) {
        this.router.navigateByUrl('dashboard/emprestimos');
      }
    })
  }


  inicializaForms(): void {

    this.formPrimeiro = new FormGroup({
      name: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      birthday: new FormControl(null, Validators.required),
      maritalStatus: new FormControl(null, Validators.required),
      motherName: new FormControl(null, Validators.required),
    });

    this.formSegundo = new FormGroup({
      cep: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      complement: new FormControl(null, Validators.required),
      neighborhood: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    });

    this.buscaCEP();

    this.formTerceiro = new FormGroup({
      rg: new FormControl(null, Validators.required),
      rgOrgao: new FormControl(null, Validators.required),
      rgUF: new FormControl(null, Validators.required),
      rgData: new FormControl(null, Validators.required),
    });

    this.formQuarto = new FormGroup({
      bank: new FormControl(null, Validators.required),
      agency: new FormControl(null, Validators.required),
      account: new FormControl(null, Validators.required),
      income: new FormControl(null, Validators.required),
      benefitType: new FormControl(null, Validators.required),
    });

    this.formQuinto = new FormGroup({
      password: new FormControl(null, Validators.required),
      c_password: new FormControl(null, Validators.required)
    });


  }


  prevPage(): void {
    if (this.currentPage === 0) {


    } else {
      this.progressBarComponent.prevPage();

    }
  }

  nextPage(): void {

    if (this.currentPage === 0 && !this.formPrimeiro.valid) {
      return;
    }

    if (this.currentPage === 1 && !this.formSegundo.valid) {
      return;
    }

    if (this.currentPage === 2 && !this.formTerceiro.valid) {
      return;
    }

    if (this.currentPage === 3 && !this.formQuarto.valid) {
      return;
    }

    if (this.currentPage === 4 && !this.validaSenhas()) {
      return;
    }

    if (this.currentPage === 4) {
      this.finalizar();
    } else {
      this.progressBarComponent.nextPage();
      this.scroll();
    }

  }

  buscaCEP() {
    let _cep = this.formSegundo.get("cep").value;
    if (_cep && _cep.length === 8) {
      this.utilsService.buscaEnderecoCep(_cep).subscribe((res: respostaCorreio) => {
        this.formSegundo.get('address').setValue(res.logradouro);
        this.formSegundo.get('neighborhood').setValue(res.bairro);
        this.formSegundo.get('city').setValue(res.localidade);
        this.formSegundo.get('state').setValue(res.uf);
      })
    }
  }

  validaSenhas() {
    let s1 = this.formQuinto.get('password').value;
    let s2 = this.formQuinto.get('c_password').value;

    if (s1 === s2) {
      return true;
    }

    const dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        error: true,
        title: 'Senha inválida',
        text: 'As senhas devem ser iguais',
        btnText: 'Entendi'
      }
    });

    return false;

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


  finalizar(): void {

    let objUser = this.montaObjUser();

    this.authService.updateUser(objUser).subscribe(res => {
      this.router.navigateByUrl('/dashboard/emprestimos')
    })

  }


  montaObjUser() {

    let _user = new UserModel();
    let _forms = [
      this.formPrimeiro.value,
      this.formSegundo.value,
      this.formTerceiro.value,
      this.formQuarto.value,
      this.formQuinto.value
    ];

    for (let form of _forms) {
      for (var propName in form) {
        if (
          form[propName] === null ||
          form[propName] === undefined ||
          (form[propName] && form[propName].toString().trim() === "")
        ) {
          delete form[propName];
        } else {
          _user[propName] = form[propName];
        }
      }
    }

    delete _user['c_password'];
    return _user;
  }

}
