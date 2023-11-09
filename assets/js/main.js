function empresario(){
    window.location.href = "EmpresaLogin.html"
}

function aluno(){
    window.location.href = "alunoLogin.html"
}

function salaDeCursos(){
    window.location.href = "coursesPages.html"
}


function pagUm(){
    document.querySelector("#pagUm").classList.add("active")
    document.querySelector("#pagDois").classList.remove("active")
    document.querySelector("#pagTres").classList.remove("active")
    const empregos = document.querySelector("#empregos")
    empregos.innerHTML = `
             <div class="card mb-3">
                <img src="assets/img/empresa2.png" class="card-img-top imgLogo" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Costureira - PEMAQ Costura</h5>
                  <p class="card-text">O costureiro é um profissional responsável pela confecção, reparo, reforma e adaptação de peças de vestuário. Trabalha com tecidos, linhas, zíperes, botões e outros acessórios para produzir roupas, acessórios, artigos para o lar e outros itens.</p>
                  <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
                  <p class="card-text"><small class="text-body-secondary">Enviado á 43 minutos atrás</small></p>
                </div>
            </div>
            <div class="card">
                <img src="assets/img/ophicina.png" class="card-img-bottom imgLogo" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Pespontadeira - Ophicina Resende</h5>
                  <p class="card-text">A pespontadeira é um profissional responsável pela costura de peças de vestuário, principalmente as que exigem acabamentos decorativos, como pespontos, nervuras e outros detalhes. Trabalha com tecidos, linhas e outros acessórios para produzir peças de alta qualidade e acabamento impecável.</p>
                  <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
                  <p class="card-text"><small class="text-body-secondary">Enviado á 2 horas atrás</small></p>
                </div>
            </div>
    `
}

function pagDois(){
    document.querySelector("#pagUm").classList.remove("active")
    document.querySelector("#pagDois").classList.add("active")
    document.querySelector("#pagTres").classList.remove("active")
    const empregos = document.querySelector("#empregos")
    empregos.innerHTML = `
    <div class="card mb-3">
       <img src="assets/img/LyaBarcelos.png" class="card-img-top imgLogo" alt="...">
       <div class="card-body">
         <h5 class="card-title">Costureira - Lya Barcelos</h5>
         <p class="card-text">O costureiro é um profissional responsável pela confecção, reparo, reforma e adaptação de peças de vestuário. Trabalha com tecidos, linhas, zíperes, botões e outros acessórios para produzir roupas, acessórios, artigos para o lar e outros itens.</p>
         <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
         <p class="card-text"><small class="text-body-secondary">Enviado á 3 horas atrás</small></p>
       </div>
   </div>
   <div class="card">
       <img src="assets/img/Wmaq.png" class="card-img-bottom imgLogo" alt="...">
       <div class="card-body">
         <h5 class="card-title">Pespontadeira - Wmaq Resende</h5>
         <p class="card-text">A pespontadeira é um profissional responsável pela costura de peças de vestuário, principalmente as que exigem acabamentos decorativos, como pespontos, nervuras e outros detalhes. Trabalha com tecidos, linhas e outros acessórios para produzir peças de alta qualidade e acabamento impecável.</p>
         <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
         <p class="card-text"><small class="text-body-secondary">Enviado á 4 horas atrás</small></p>
       </div>
   </div>
`
}

function pagTres(){
    const empregos = document.querySelector("#empregos")
    document.querySelector("#pagUm").classList.remove("active")
    document.querySelector("#pagDois").classList.remove("active")
    document.querySelector("#pagTres").classList.add("active")

    empregos.innerHTML = `
    <div class="card mb-3">
       <img src="assets/img/sewingStudio.png" class="card-img-top imgLogo" alt="...">
       <div class="card-body">
         <h5 class="card-title">Costureira - Sewing Studio</h5>
         <p class="card-text">O costureiro é um profissional responsável pela confecção, reparo, reforma e adaptação de peças de vestuário. Trabalha com tecidos, linhas, zíperes, botões e outros acessórios para produzir roupas, acessórios, artigos para o lar e outros itens.</p>
         <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
         <p class="card-text"><small class="text-body-secondary">Enviado á 6 horas atrás</small></p>
       </div>
   </div>
   <div class="card">
       <img src="assets/img/brindesTailor.png" class="card-img-bottom imgLogo" alt="...">
       <div class="card-body">
         <h5 class="card-title">Pespontadeira - Brindes Tailor</h5>
         <p class="card-text">A pespontadeira é um profissional responsável pela costura de peças de vestuário, principalmente as que exigem acabamentos decorativos, como pespontos, nervuras e outros detalhes. Trabalha com tecidos, linhas e outros acessórios para produzir peças de alta qualidade e acabamento impecável.</p>
         <a href="#" class="btn btn-primary btnAplica">Aplicar-se</a>
         <p class="card-text"><small class="text-body-secondary">Enviado á 7 horas atrás</small></p>
       </div>
   </div>
`
}