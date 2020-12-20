import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  emprestimos = [];

  ngOnInit(): void {
    this.authService.dadosUser.subscribe(user => {
      if (user && user.user && user.user.isLead) {
        this.router.navigateByUrl('dashboard/cadastro-completo');
      }
    })
  }

}
