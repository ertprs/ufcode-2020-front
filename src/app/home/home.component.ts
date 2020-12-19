import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  convenios = ['inss', 'federal', 'estadual']
  ofertas = false;
  loading = true;

  valor = null;
  convenio = null;


  resultadosEncontrados = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

  solicitar() {

    if (!this.valor || !this.convenio) {
      return false;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 200);
    this.ofertas = true;
    this.resultadosEncontrados = [{
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/pan.png',
      banco_nome: 'Banco PAN',
      banco_valor: this.valor,
      banco_taxa: "1,80%"
    },

    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828114119png',
      banco_nome: 'Banco Bmg',
      banco_valor: this.valor,
      banco_taxa: "1,80%"
    },
    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122302png',
      banco_nome: 'Banco Bradesco',
      banco_valor: this.valor,
      banco_taxa: "1,80%"
    },
    {
      banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122833png',
      banco_nome: 'Banco Itau',
      banco_valor: this.valor,
      banco_taxa: "1,80%"
    }];
  }



}
