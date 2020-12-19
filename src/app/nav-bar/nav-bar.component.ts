import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user = {
    name: 'Ana Maria Joaquina'
  }

  @Input() showPerguntas = true;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user);
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
    this.user = null;
    this.router.navigateByUrl('/home');
  }

}
