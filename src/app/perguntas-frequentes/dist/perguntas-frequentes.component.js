"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerguntasFrequentesComponent = void 0;
var core_1 = require("@angular/core");
var PerguntasFrequentesComponent = /** @class */ (function () {
    function PerguntasFrequentesComponent() {
        this.selected = null;
        this.searchText = null;
        this.perguntasShow = [];
        this.perguntas = [
            {
                id: 0,
                question: 'Afinal, o que é o Crédito Consignado?',
                answer: 'É uma modalidade de empréstimo que se diferencia pela forma de pagamento: todo mês, as parcelas da dívida são descontadas automaticamente do salário ou benefício do INSS.'
            },
            {
                id: 1,
                question: 'E qual é o limite de crédito?',
                answer: 'Visando não comprometer o seu orçamento mensal, o valor da parcela do empréstimo não pode ser maior do que 30% do salário ou benefício.'
            },
            {
                id: 2,
                question: 'Quanto tempo demora para o dinheiro cair na conta?',
                answer: 'Você preenche um cadastro e pronto, deu início à operação do empréstimo. Assim que aprovado, o valor cai na conta em até 2 dias.  Ah, e você pode fazer a simulação de seu empréstimo consignado no nosso site.'
            },
            {
                id: 3,
                question: 'Mas, quem pode solicitar o crédito consignado?',
                answer: 'Atualmente, o crédito é oferecido para aposentados e pensionistas do INSS, e servidores públicos (Federais, Estaduais, Municipais, funcionários das Forças Armadas e TJMG).'
            },
            {
                id: 4,
                question: 'Posso fazer mais de um consignado?',
                answer: 'Sim. De acordo com a lei 10.820, de 17 de dezembro de 2003, o trabalhador pode ter mais de um crédito consignado.'
            },
            {
                id: 5,
                question: 'Qual é o percentual de juros?',
                answer: 'Outra vantagem oferecida por essa modalidade é que a taxa de juros pode ser até 10 vezes menor do que os encargos do cartão de crédito e cheque especial.'
            },
            {
                id: 6,
                question: 'Qual o limite de idade para fazer empréstimo consignado?',
                answer: 'O empréstimo consignado para aposentados e pensionistas do Instituto Nacional de Segurança Social possui algumas especificações, tais como: limite de idade (após 74 anos e 11 meses o número de parcelas e o limite da liberação de crédito são reduzidos) e margem de 30% para novo empréstimo.'
            },
            {
                id: 7,
                question: 'Qual a menor taxa de juros para consignado 2020?',
                answer: 'O banco com a menor taxa para empréstimo consignado do INSS em 2020 é o Santander, com taxa de 1,10% ao mês.'
            },
            {
                id: 8,
                question: 'O que é disponível para consignado',
                answer: 'O valor disponível para contratação no crédito consignado deve respeitar a margem consignável, ou seja, o valor máximo do salário que pode ser comprometido para pagamento das mensalidades.'
            },
            {
                id: 9,
                question: 'Quem não pode solicitar empréstimo consignado?',
                answer: 'Primeiramente quem recebe auxílio temporário do INSS. Servidores públicos em cargos provisórios: não é elegível por não possuir estabilidade financeira. Trabalhadores temporários ou estagiários: também não possuem estabilidade financeira;'
            },
            {
                id: 10,
                question: 'Como funciona o empréstimo consignado em folha de pagamento?',
                answer: 'O empréstimo consignado, ou crédito consignado, é uma modalidade de empréstimo que possui uma característica particular: o valor mensal das parcelas é descontado do salário ou benefício de quem contrata. Em outras palavras, o indivíduo receberá uma remuneração menor enquanto durar a dívida, seja qual for a quantia.'
            },
            {
                id: 11,
                question: 'Como diminuir os juros do consignado?',
                answer: 'Basta analisar e encontrar os menores juros em outra instituição financeira e fazer a solicitação da proposta. Dentre as opções de portabilidade, é possível fazer a solicitação optando pela redução do valor da parcela e também obter um valor mínimo de troco.'
            },
            {
                id: 12,
                question: 'Qual a taxa de juros para consignado INSS?',
                answer: 'A taxa de juros do empréstimo consignado para aposentados e pensionistas do Instituto Nacional do Seguro Social (INSS) passará dos atuais 2,08% para 1,80%, enquanto a taxa para o cartão de crédito será reduzida de 3% para 2,70%.'
            },
            {
                id: 13,
                question: 'Como funciona a renovação de empréstimo consignado?',
                answer: 'Também chamado de renovação, o refinanciamento de crédito consignado é uma maneira de se obter mais prazo ou um novo aporte de dinheiro a partir de um contrato já existente.'
            },
            {
                id: 14,
                question: 'O que significa renovação de empréstimo?',
                answer: 'A renovação de empréstimos é uma solução que possibilita a contratação de uma nova operação de empréstimo, incluindo um ou vários contratos ativos, repactuando as condições originalmente contratadas com possibilidade de solicitar novo valor de crédito.'
            },
            {
                id: 15,
                question: 'O que é um refinanciamento de empréstimo?',
                answer: 'Refinanciamento de empréstimo é um meio de substituir um contrato de crédito antigo por um novo, negociando melhores condições de pagamento. Dessa forma, é possível reduzir as taxas, aumentar o prazo de pagamento e até conseguir mais dinheiro, dependendo do objetivo do solicitante.'
            },
            {
                id: 16,
                question: 'Quanto tempo demora refinanciamento consignado?',
                answer: 'Cartão de crédito consignado:leva em média de 3 a 5 dias úteis para ser aprovado. Refinanciamento ou portabilidade de crédito: leva em média de 15 a 20 dias úteis para ser aprovado e liberar empréstimo consignado BMG.'
            },
            {
                id: 17,
                question: 'Como fazer um refinanciamento de empréstimo?',
                answer: 'Para solicitar o refinanciamento, é necessário que uma parte das parcelas do empréstimo anterior já estejam pagas (de 15% a 30%). Contudo, a operação é regida pela Lei nº 10.820/2003, que regulamenta o empréstimo consignado. Por fim, ao refinanciar, a dívida é quitada e a diferença é liberada como novo saldo.'
            }
        ];
    }
    PerguntasFrequentesComponent.prototype.ngOnInit = function () {
        this.perguntasShow = this.perguntas;
    };
    PerguntasFrequentesComponent.prototype.changePergunta = function () {
        if (!this.searchText ||
            this.searchText.trim === "") {
            this.perguntasShow = this.perguntas;
        }
    };
    PerguntasFrequentesComponent.prototype.pesquisaPergunta = function () {
        var _this = this;
        this.perguntasShow = [];
        console.log("Pesquisando...", this.searchText);
        var pesquisa = this.searchText;
        if (!pesquisa || pesquisa.trim() === "") {
            this.perguntasShow = this.perguntas;
            return;
        }
        this.perguntas.forEach(function (item) {
            var _hasQ = false;
            var _hasA = false;
            if (_this.limpa(item.question.toLowerCase()).indexOf(_this.limpa(pesquisa.toLowerCase())) >= 0) {
                _hasQ = true;
            }
            if (_this.limpa(item.answer.toLowerCase()).indexOf(_this.limpa(pesquisa.toLowerCase())) >= 0) {
                _hasA = true;
            }
            if (_hasA || _hasQ)
                _this.perguntasShow.push(item);
        });
    };
    PerguntasFrequentesComponent.prototype.blurPergunta = function () {
        this.searchText = (this.searchText.trim());
    };
    PerguntasFrequentesComponent.prototype.limpa = function (string) {
        return string
            .replace("á", "a")
            .replace("é", "e")
            .replace("í", "i")
            .replace("ó", "ó")
            .replace("ú", "ú")
            .replace("ã", "a")
            .replace("õ", "o")
            .replace("ç", "c")
            .replace("à", "a");
    };
    PerguntasFrequentesComponent = __decorate([
        core_1.Component({
            selector: 'app-perguntas-frequentes',
            templateUrl: './perguntas-frequentes.component.html',
            styleUrls: ['./perguntas-frequentes.component.scss']
        })
    ], PerguntasFrequentesComponent);
    return PerguntasFrequentesComponent;
}());
exports.PerguntasFrequentesComponent = PerguntasFrequentesComponent;
