import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSimulaCpfComponent } from './form-simula-cpf/form-simula-cpf.component';
import { FormPreCadastroComponent } from './form-pre-cadastro/form-pre-cadastro.component';
import { FormOpcoesAtendimentoComponent } from './form-opcoes-atendimento/form-opcoes-atendimento.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { UtilsService } from './utils.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CadastroCompletoComponent } from './dashboard/cadastro-completo/cadastro-completo.component';
import { DialogSenhaComponent } from './dialog-senha/dialog-senha.component';
import { EmprestimosComponent } from './dashboard/emprestimos/emprestimos.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FormLoginComponent,
    FormSimulaCpfComponent,
    FormPreCadastroComponent,
    FormOpcoesAtendimentoComponent,
    DialogAlertComponent,
    DashboardComponent,
    PerguntasFrequentesComponent,
    ProgressBarComponent,
    CadastroCompletoComponent,
    DialogSenhaComponent,
    EmprestimosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
