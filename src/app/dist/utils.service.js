"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UtilsService = exports.respostaCorreio = void 0;
var core_1 = require("@angular/core");
var respostaCorreio = /** @class */ (function () {
    function respostaCorreio() {
    }
    return respostaCorreio;
}());
exports.respostaCorreio = respostaCorreio;
var UtilsService = /** @class */ (function () {
    function UtilsService(httpClient) {
        this.httpClient = httpClient;
    }
    UtilsService.prototype.buscaEnderecoCep = function (cep) {
        return this.httpClient.get("https://viacep.com.br/ws/" + cep + "/json/");
    };
    UtilsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
