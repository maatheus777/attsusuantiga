// Funções para abrir e fechar o modal
function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Função para salvar cadastro no localStorage
  function salvarCadastro(event) {
    event.preventDefault();
  
    // Pegando os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
  
    // Salvando no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("senha", senha);
  
    alert("Seu cadastro foi realizado");
  
    // Fechar o modal e redirecionar para a página de perfil
    closeModal();
    window.location.href = "perfil.html";
}

  function mascara_cpf()
{ var cpf_formatado=document.getElementById("cpf").value
if (cpf_formatado[3]!=".")
{
if (cpf_formatado[3]!=undefined)
{  
document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
}
}
if (cpf_formatado[7]!=".")
{
if(cpf_formatado[7]!=undefined)
{
document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
}
}
if (cpf_formatado[11]!="-")
{
if(cpf_formatado[11]!=undefined)
{
document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
}
}
}

function mascara_telefone()
{var tel = document.getElementById("telefone").value
console.log(tel)
tel=tel.slice(0,14)
console.log(tel)
document.getElementById("telefone").value=tel
tel=document.getElementById("telefone").value.slice(0,10)
console.log(tel)
var tel_formatado = document.getElementById("telefone").value
if (tel_formatado[0]!="(")
{
if(tel_formatado[0]!=undefined)
{
document.getElementById("telefone").value="("+tel_formatado[0];
}
}
if (tel_formatado[3]!=")")
{
if(tel_formatado[3]!=undefined)
{
document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
}
}
if (tel_formatado[9]!="-")
{
if(tel_formatado[9]!=undefined)
{
document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
}
}
}