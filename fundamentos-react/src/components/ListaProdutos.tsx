import { useState } from "react";

export function ListaProdutos() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Teclado", preco: 150 },
  ]);
  const [novoProduto, setNovoProduto] = useState({ nome: "", preco: "" });

  function addProduto() {
    if (novoProduto.nome && novoProduto.preco) {
      const produto = {
        id: Date.now(),
        nome: novoProduto.nome,
        preco: parseFloat(novoProduto.preco),
      };
      setProdutos([...produtos, produto]);
      setNovoProduto({ nome: "", preco: "" });
    }
  }
  function removerProduto(id: number) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Produtos</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: e.target.value })
          }
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={addProduto}>Adicionar</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {produtos.map((produto) => (
          <li
            key={produto.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              background: "#f0f0f0",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
            </span>
            <button
              onClick={() => removerProduto(produto.id)}
              style={{
                background: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total:</strong> R${" "}
        {produtos.reduce((sum, p) => sum + p.preco, 0).toFixed(2)}
      </p>
    </div>
  );
}
