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


async function listarProdutos() {
  const produtosSnapshot = await getDocs(collection(db, "produtos"));
  const listaProdutos = produtosSnapshot.docs.map(doc => doc.data());
  
  const containerProdutos = document.getElementById("produtos");

  listaProdutos.forEach(produto => {
    const produtoDiv = document.createElement("div");
    produtoDiv.innerHTML = `
      <div class="m-2 col-10">
              <div class="card product-card shadow-sm">
                  <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="E-book 1">
                  <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.descricao}</p>
                      <p class="text-primary fw-bold">R$ ${produto.preco}</p>
                      <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                      <a href="#" class="btn btn-outline-primary">Detalhes</a>
                  </div>
              </div>
      </div>
    `;
    containerProdutos.appendChild(produtoDiv);
  });
}

listarProdutos()