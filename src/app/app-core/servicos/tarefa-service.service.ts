import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: string[]=[];

  constructor() { }

addTarefa(tarefa: string){
    this.tarefas.push(tarefa); //pega tarefa que veio por parametro e bota na lista de tarefas (variavel private tarefas)
    console.log("TAREFAS ADICIONADAS", this.tarefas);
}


}
