import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWdojzqS8U2KZS_9Z10YQlcAoWjtyttos",
  authDomain: "guia-essencial.firebaseapp.com",
  databaseURL: "https://guia-essencial-default-rtdb.firebaseio.com",
  projectId: "guia-essencial",
  storageBucket: "guia-essencial.appspot.com",
  messagingSenderId: "480065816620",
  appId: "1:480065816620:web:0ff44395b64529cce5e989",
  measurementId: "G-R74W0FT9JD"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


// Função para listar produtos
async function listarProdutos() {                               

  const Ebooks = await getDocs(collection(db, "E-book"));           // Exibição dos E-books
  const listaEBook = Ebooks.docs.map(doc => doc.data());
  var containerProdutos = document.getElementById("produtos-ebook");

  listaEBook.forEach((produto, index) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.innerHTML = `
      <div class="m-2 col-10">
              <div class="card product-card shadow-sm">
                  <img src="${produto.foto}" class="card-img-top" alt="E-book 1">
                  <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.descricao}</p>
                      <p class="text-primary fw-bold">R$ ${produto.preco.toFixed(2)}</p>
                      <a href="#" class="btn btn-primary btn-carrinho">Adicionar ao Carrinho</a>
                  </div>
              </div>
      </div>
    `;
    if (index === 7)
    {
      return
    }
    containerProdutos.appendChild(produtoDiv);
  });




  const Apostila = await getDocs(collection(db, "Apostila"));            // Exibição das Apostilas
  const listaApostila = Apostila.docs.map(doc => doc.data());
  const ApostilaContainer = document.getElementById("produtos-apostila");

  listaApostila.forEach(produto => {
    const produtoDiv = document.createElement("div");
    produtoDiv.innerHTML = `
      <div class="m-2 col-10">
              <div class="card product-card shadow-sm">
                  <img src="${produto.foto}" class="card-img-top" alt="E-book 1">
                  <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.descricao}</p>
                      <p class="text-primary fw-bold">R$ ${produto.preco.toFixed(2)}</p>
                      <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                  </div>
              </div>
      </div>
      `;
      ApostilaContainer.appendChild(produtoDiv);
  });




  const Curso = await getDocs(collection(db, "Curso"));            // Exibição dos Cursos
  const ListaCurso = Curso.docs.map(doc => doc.data());
  const CursoContainer = document.getElementById("produtos-curso");

  ListaCurso.forEach(produto => {
    const produtoDiv = document.createElement("div");
    produtoDiv.innerHTML = `
      <div class="m-2 col-10">
              <div class="card product-card shadow-sm">
                  <img src="${produto.foto}" class="card-img-top card-imagem" alt="E-book">
                  <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.descricao}</p>
                      <p class="text-primary fw-bold">R$ ${produto.preco.toFixed(2)}</p>
                      <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                  </div>
              </div>
      </div>
      `;
      CursoContainer.appendChild(produtoDiv);
  });






}

listarProdutos()