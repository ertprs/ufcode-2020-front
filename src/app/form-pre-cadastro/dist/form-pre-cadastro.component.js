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
exports.FormPreCadastroComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var FormPreCadastroComponent = /** @class */ (function () {
    function FormPreCadastroComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    FormPreCadastroComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            usuario_nome: new forms_1.FormControl(null, forms_1.Validators.required),
            usuario_cpf: new forms_1.FormControl(this.data.usuario_cpf, forms_1.Validators.required),
            usuario_celular: new forms_1.FormControl(null, forms_1.Validators.required),
            usuario_email: new forms_1.FormControl(null, forms_1.Validators.required),
            usuario_cep: new forms_1.FormControl(null, forms_1.Validators.required),
            emprestimo_valor: new forms_1.FormControl(this.data.emprestimo_valor, forms_1.Validators.required)
        });
    };
    FormPreCadastroComponent.prototype.preCadastro = function () {
    };
    FormPreCadastroComponent.prototype.close = function () {
        this.dialogRef.close({});
    };
    FormPreCadastroComponent = __decorate([
        core_1.Component({
            selector: 'app-form-pre-cadastro',
            templateUrl: './form-pre-cadastro.component.html',
            styleUrls: ['./form-pre-cadastro.component.scss']
        }),
        __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FormPreCadastroComponent);
    return FormPreCadastroComponent;
}());
exports.FormPreCadastroComponent = FormPreCadastroComponent;
