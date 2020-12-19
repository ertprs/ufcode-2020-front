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
var form_opcoes_atendimento_component_1 = require("../form-opcoes-atendimento/form-opcoes-atendimento.component");
var form_pre_cadastro_component_1 = require("../form-pre-cadastro/form-pre-cadastro.component");
var form_simula_cpf_component_1 = require("../form-simula-cpf/form-simula-cpf.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.convenios = ['inss', 'federal', 'estadual'];
        this.ofertas = false;
        this.loading = true;
        this.emprestimo_valor = null;
        this.convenio = null;
        this.usuario_cpf = null;
        this.user_senha = null;
        this.resultadosEncontrados = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.preCadastro();
    };
    HomeComponent.prototype.solicitar = function () {
        var _this = this;
        if (!this.emprestimo_valor || !this.convenio) {
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
                banco_valor: this.emprestimo_valor,
                banco_taxa: "1,80%"
            },
            {
                banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828114119png',
                banco_nome: 'Banco Bmg',
                banco_valor: this.emprestimo_valor,
                banco_taxa: "1,80%"
            },
            {
                banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122302png',
                banco_nome: 'Banco Bradesco',
                banco_valor: this.emprestimo_valor,
                banco_taxa: "1,80%"
            },
            {
                banco_img: 'https://api.infinitesales.com.br/storage/instituicao/20200828122833png',
                banco_nome: 'Banco Itau',
                banco_valor: this.emprestimo_valor,
                banco_taxa: "1,80%"
            }];
    };
    HomeComponent.prototype.validaCpf = function (banco) {
        var _this = this;
        var dialogRef = this.dialog.open(form_simula_cpf_component_1.FormSimulaCpfComponent, {
            data: {
                banco: banco
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.verificar && result.cadastrar) {
                _this.usuario_cpf = result.usuario_cpf;
                _this.preCadastro();
            }
        });
    };
    HomeComponent.prototype.preCadastro = function () {
        console.log(this.usuario_cpf);
        var dialogRef = this.dialog.open(form_pre_cadastro_component_1.FormPreCadastroComponent, {
            data: {
                emprestimo_valor: this.emprestimo_valor,
                usuario_cpf: this.usuario_cpf
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.verificar) {
            }
        });
    };
    HomeComponent.prototype.opcoesAtendimento = function () {
        var dialogRef = this.dialog.open(form_opcoes_atendimento_component_1.FormOpcoesAtendimentoComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.verificar) {
            }
        });
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
