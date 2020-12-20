import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, take, tap } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario_logado = null;
  constructor(private httpClient: HttpClient) { }

  private _dadosUser = new BehaviorSubject<any>(null);

  public get dadosUser() {
    return this._dadosUser.asObservable().pipe(
      map((r) => {
        return r;
      })
    );
  }

  logar(cpf, password) {
    return this.httpClient.post(environment.urlApi + 'users/login', {
      cpf, password
    }).pipe(tap(res => {
      this.usuario_logado = res;
      this._dadosUser.next(res);
      sessionStorage.setItem("usuario_logado", JSON.stringify(res));
    }));
  }

  verificarCPF(cpf) {
    return this.httpClient.get(environment.urlApi + 'users/check-cpf?cpf=' + cpf);
  }

  cadastrar(dados) {
    return this.httpClient.post(environment.urlApi + 'users', dados).pipe(tap(res => {
      this.usuario_logado = res;
      this._dadosUser.next(res);
      sessionStorage.setItem("usuario_logado", JSON.stringify(res));
    }));
  }

  autoLogin() {
    let user = sessionStorage.getItem("usuario_logado");
    console.log(user)
    if (user) {
      this._dadosUser.next(JSON.parse(user));
    }
  }

  sair() {
    sessionStorage.clear();
    this._dadosUser.next(null);
  }


}
