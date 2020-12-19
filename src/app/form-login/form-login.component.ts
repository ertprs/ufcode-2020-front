import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
      success?;
      error?;
      warning?;
      title?;
      text?;
      btnText?;
      dialogQuestion?;
    },
    public dialogRef: MatDialogRef<FormLoginComponent>
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close({
      
    });
  }

  


}
