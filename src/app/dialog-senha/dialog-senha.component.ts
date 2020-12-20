import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-senha',
  templateUrl: './dialog-senha.component.html',
  styleUrls: ['./dialog-senha.component.scss']
})
export class DialogSenhaComponent implements OnInit {

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
    public dialogRef: MatDialogRef<DialogSenhaComponent>
  ) { }

  ngOnInit(): void { }

  close(action): void {
    this.dialogRef.close({
      response: action
    });
  }
}
