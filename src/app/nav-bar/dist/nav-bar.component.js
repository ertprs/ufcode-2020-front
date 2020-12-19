"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavBarComponent = void 0;
var core_1 = require("@angular/core");
var form_login_component_1 = require("../form-login/form-login.component");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.user = {
            name: 'Ana Maria Joaquina'
        };
        this.showPerguntas = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    NavBarComponent.prototype.openLogin = function () {
        var dialogRef = this.dialog.open(form_login_component_1.FormLoginComponent, {
            data: {
            // paramos
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    NavBarComponent.prototype.sair = function () {
        this.user = null;
        this.router.navigateByUrl('/home');
    };
    __decorate([
        core_1.Input()
    ], NavBarComponent.prototype, "showPerguntas");
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
