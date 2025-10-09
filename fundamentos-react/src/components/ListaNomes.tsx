export function ListaNomes() {
  const nomes = ["Maria", "João", "Paulo"];
  const pessoas = nomes.map(pessoa => <li>{pessoa}</li>);
  return (
    <div>
      <ul>
        {pessoas}
      </ul>
    </div>
  );
}
