import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { FormSimulaCpfComponent } from '../form-simula-cpf/form-simula-cpf.component';
import { respostaCorreio, UtilsService } from '../utils.service';

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
    private utilsService: UtilsService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<FormSimulaCpfComponent>
  ) {

    this.authService.valor_pre_selecionado;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cpf: new FormControl(this.data.usuario_cpf, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      cep: new FormControl(null, Validators.required),
      // valor: new FormControl(this.authService.valor_pre_selecionado, Validators.required)
    })
  }

  preCadastro() {
    if (this.form.valid) {
      this.utilsService.buscaEnderecoCep(this.form.get('cep').value).subscribe((res: respostaCorreio) => {
        let enderecoCep = {
          endereco: res.logradouro,
          bairro: res.bairro,
          localidade: res.localidade,
          uf: res.uf
        }

        this.close(true, enderecoCep);
        // this.authService.valor_pre_selecionado = this.form.get("valor").value;

        this.authService.cadastrar(this.form.value).subscribe(res => {
          console.log(res);
        });
      })
    }
  }

  close(verificar?, enderecoCep?): void {
    this.dialogRef.close({
      verificar,
      enderecoCep
    });
  }



}
