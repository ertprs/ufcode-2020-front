import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCompletoComponent } from './dashboard/cadastro-completo/cadastro-completo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'perguntas-frequentes', component: PerguntasFrequentesComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/cadastro-completo', component: CadastroCompletoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
