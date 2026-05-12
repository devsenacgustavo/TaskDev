// este modulo é responsavel por validar as tarefas antes de adicionar

// Função para vaidar o texto da tarefa,em que ter ao menos 3 tarefas

// array para armazenar tarefas
let tarefas = [];

//função para adicionar nova tarefa
export function adicionarTarefa(texto) {
  const tarefa = {
    id: Date.now(),
    texto: texto,
    concluida: false,
  };

  tarefas.push(tarefa);
  return tarefa;
}

//função para validar o texto da tarefa
export function validarTarefa(texto) {
  if (texto.trim() === "") {
    return {
      valida: false,
      mensagem: "A tarefa não pode estar vazia.",
    };
  }

  if (texto.length < 3) {
    return {
      valida: false,
      mensagem: "A tarefa deve ter ao menos 3 caracteres.",
    };
  }

  return { valida: true };
}

//Função para obter todas as tarefas
export function obterTarefas() {
  return tarefas;
}
