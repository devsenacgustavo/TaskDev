//importando funções do modulo DOM
import {
  obterTextoTarefa,
  limparInput,
  renderizarTarefas,
  exibirMensagem,
} from "./dom.js";

//IMPORTANDO FUNÇÕES DO MODULO TAREFAS
import { validarTarefa, adicionarTarefa, obterTarefas } from "./tarefas.js";

//selecionar o formulário para adicionar um evento de submit
const form = document.querySelector("#form-tarefa");

//Evento de submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const texto = obterTextoTarefa();
  const resultado = validarTarefa(texto);

  if (!resultado.valida) {
    exibirMensagem(resultado.mensagem, "error");
    return;
  }

  adicionarTarefa(texto);
  renderizarTarefas(obterTarefas());
  exibirMensagem("Tarefa adicionada com sucesso!", "sucesso");
  limparInput();
});
