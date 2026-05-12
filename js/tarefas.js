// este modulo é responsavel por validar as tarefas antes de adicionar

// Função para vaidar o texto da tarefa,em que ter ao menos 3 tarefas
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

  return {
    valida: true,
    mensagem: "Tarefa válida.",
  };
}
