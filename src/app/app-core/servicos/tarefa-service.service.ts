import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaServiceService {

  private tarefas: string[]=[];

  constructor() { }

addtarefa(tarefa: string){
    this.tarefas.push(tarefa); //pega tarefa que veio por parametro e bota na lista de tarefas (variavel private tarefas)
    console.log("TAREFAS ADICIONADAS", this.tarefas);
}


}
