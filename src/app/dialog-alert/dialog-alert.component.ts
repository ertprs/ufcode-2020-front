import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {
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
    public dialogRef: MatDialogRef<DialogAlertComponent>
  ) { }

  ngOnInit(): void { }

  close(action): void {
    this.dialogRef.close({
      response: action
    });
  }
}

