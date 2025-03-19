function buscaCEP(){
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if(data.erro){
            document.getElementById("resultado").innerHTML="CEP não encontrado na base de dados.";
        }
        else{
            document.getElementById("resultado").innerHTML=`
                <strong>CEP<strong>: ${data.cep}<br>
                <strong>Logradouro<strong>: ${data.logradouro}<br>

            `;
        }
    })
    .catch(error => document.getElementById("resultado").innerHTML="Erro ao buscar CEP")
}