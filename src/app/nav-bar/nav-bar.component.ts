import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin(){
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

}
