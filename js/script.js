const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");
const pacientes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inPaciente.value;
  pacientes.push(nome);
  atualizarExibicao();
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click", () => {
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência!");
    frm.inPaciente.focus();
    return;
  }
  const nomeUrgente = frm.inPaciente.value;
  pacientes.unshift(nomeUrgente);
  atualizarExibicao();
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

function atualizarExibicao() {
  if (pacientes.length > 0) {
    respNome.innerText = pacientes[0]; // Exibe o primeiro paciente em atendimento
    let listaEspera = "";
    // Começa do segundo paciente (índice 1) para a lista de espera
    for (let i = 1; i < pacientes.length; i++) {
      listaEspera += `${i} - ${pacientes[i]}\n`; // Note que o índice começa em 1 aqui
    }
    respLista.innerText = listaEspera;
  } else {
    respNome.innerText = ""; // Limpa o nome em atendimento se não houver pacientes
    respLista.innerText = ""; // Limpa a lista de espera se não houver pacientes
  }
}