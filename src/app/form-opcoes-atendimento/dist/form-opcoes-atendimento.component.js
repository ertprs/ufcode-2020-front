"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.FormOpcoesAtendimentoComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var FormOpcoesAtendimentoComponent = /** @class */ (function () {
    function FormOpcoesAtendimentoComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.horarios_ligacao = ['Manhã', 'Tarde', 'Noite'];
        this.unidades = ['Empresta BH Afonso Pena', 'Empresta BH Tupinambás', 'Empresta BH Praça 7'];
        this.escolhido = false;
        this.loading = false;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.enderecoString =
            "Perto de " +
                data.enderecoCep.bairro + ", " +
                data.enderecoCep.localidade;
    }
    FormOpcoesAtendimentoComponent.prototype.ngOnInit = function () { };
    FormOpcoesAtendimentoComponent.prototype.close = function () {
        this.dialogRef.close({});
    };
    FormOpcoesAtendimentoComponent.prototype.selecionar = function (op) {
        this.opcao_atendimento = op;
    };
    FormOpcoesAtendimentoComponent.prototype.continuar = function () {
        var _this = this;
        this.escolhido = true;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.dialogRef.close({
                agendou: true,
                acao: _this.opcao_atendimento
            });
        }, 1000);
    };
    FormOpcoesAtendimentoComponent = __decorate([
        core_1.Component({
            selector: 'app-form-opcoes-atendimento',
            templateUrl: './form-opcoes-atendimento.component.html',
            styleUrls: ['./form-opcoes-atendimento.component.scss']
        }),
        __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FormOpcoesAtendimentoComponent);
    return FormOpcoesAtendimentoComponent;
}());
exports.FormOpcoesAtendimentoComponent = FormOpcoesAtendimentoComponent;
