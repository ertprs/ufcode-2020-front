import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  user_senha;
  usuario_cpf;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      tentouSimular?: boolean,
      usuario_cpf?: boolean
    },
    private autgService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<FormLoginComponent>
  ) {
    this.usuario_cpf = data.usuario_cpf;
  }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close({

    });
  }

  logar() {
    this.autgService.logar(this.usuario_cpf, this.user_senha).subscribe(res => {
      this.router.navigateByUrl('dashboard');
      this.close();
    })
  }



}
