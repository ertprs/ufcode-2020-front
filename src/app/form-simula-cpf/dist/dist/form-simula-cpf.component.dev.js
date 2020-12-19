"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

exports.__esModule = true;
exports.FormSimulaCpfComponent = void 0;

var core_1 = require("@angular/core");

var dialog_1 = require("@angular/material/dialog");

var FormSimulaCpfComponent =
/** @class */
function () {
  function FormSimulaCpfComponent(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.banco = data.banco;
  }

  FormSimulaCpfComponent.prototype.ngOnInit = function () {};

  FormSimulaCpfComponent.prototype.close = function () {
    this.dialogRef.close({});
  };

  FormSimulaCpfComponent.prototype.verificaCPF = function () {
    this.dialogRef.close({
      verificar: true,
      cadastrar: true,
      usuario_cpf: this.usuario_cpf
    });
  };

  FormSimulaCpfComponent = __decorate([core_1.Component({
    selector: 'app-form-simula-cpf',
    templateUrl: './form-simula-cpf.component.html',
    styleUrls: ['./form-simula-cpf.component.scss']
  }), __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA))], FormSimulaCpfComponent);
  return FormSimulaCpfComponent;
}();

exports.FormSimulaCpfComponent = FormSimulaCpfComponent;