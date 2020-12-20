import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-dialog-collapse',
  templateUrl: './dialog-collapse.component.html',
  styleUrls: ['./dialog-collapse.component.scss']
})
export class DialogCollapseComponent implements OnInit {

  user = null;


  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      showPerguntas?
    },
    public dialogRef: MatDialogRef<DialogCollapseComponent>) { }

  ngOnInit(): void {
    this.authService.autoLogin();

    this.authService.dadosUser.subscribe(user => {
      if (!user) return
      this.user = user.user;
    })
  }

  openLogin() {
    const dialogRef = this.dialog.open(FormLoginComponent, {
      data: {
        // paramos
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

      }
    });
  }

  sair() {
    this.authService.sair();
    this.user = null;
    this.router.navigateByUrl('/home');
  }


}
