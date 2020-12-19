"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.convenios = ['inss', 'federal', 'estadual'];
        this.ofertas = false;
        this.loading = true;
        this.valor = null;
        this.convenio = null;
        this.resultadosEncontrados = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.solicitar = function () {
        var _this = this;
        if (!this.valor || !this.convenio) {
            return false;
        }
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
