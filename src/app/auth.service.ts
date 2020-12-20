import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario_logado = null;

  constructor(private httpClient: HttpClient) { }

  logar(email, senha) {
    return this.httpClient.post(environment.urlApi + '', {
      email, senha
    });
  }

  


}
