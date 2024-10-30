import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarTarefasComponent} from "./componentes/visualizar-tarefas/visualizar-tarefas.component";

const routes: Routes = [
  {path: "", redirectTo: "pagina-inicial", pathMatch: "full"},  //configurar primeira pagina que vai abrir
  {path: "pagina-inicial", component: PaginaInicialComponent},
  {path: "visualizar-tarefas", component: VisualizarTarefasComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
