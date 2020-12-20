import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

export class respostaCorreio {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class objLoan {
  owner: string;
  value: number;
  bankName: string;
  bankImage: string;
  numInstallments: number;
  interestRate: number;
  installmentValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private _emprestimos = new BehaviorSubject<any>(null);

  public get emprestimos() {
    return this._emprestimos.asObservable().pipe(
      map((r) => {
        return r;
      })
    );
  }

  constructor(private httpClient: HttpClient) { }

  buscaEnderecoCep(cep: string): Observable<respostaCorreio> {
    return this.httpClient.get<respostaCorreio>("https://viacep.com.br/ws/" + cep + "/json/");
  }

  buscaBancos(convenio, valor): Observable<any> {
    return this.httpClient.get(environment.urlApi + 'banks?convenio=' + convenio + '&valor=' + valor);
  }

  solicitaEmprestimo(loan: objLoan) {
    return this.httpClient.post(environment.urlApi + 'loan-requests', loan);
  }

  buscaEmprestimos(usuario) {

    return this.httpClient.get(environment.urlApi + 'loan-requests?owner=' + usuario.user._id, {
      headers: new HttpHeaders({
        Authorization: usuario.token
      })
    }).pipe(tap(res => {
      this._emprestimos.next(res);
    }));
  }

}
