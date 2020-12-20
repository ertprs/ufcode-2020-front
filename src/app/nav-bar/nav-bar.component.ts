import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user = null;

  @Input() showPerguntas = true;

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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
