import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient: HttpClient) { }

  buscaEnderecoCep(cep: string): Observable<respostaCorreio> {
    return this.httpClient.get<respostaCorreio>("https://viacep.com.br/ws/" + cep + "/json/");
  }


}
