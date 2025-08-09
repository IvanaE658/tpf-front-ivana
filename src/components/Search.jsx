import { useState, useEffect } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        setError("");
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) throw new Error("Error al buscar productos");
        const data = await res.json();

        // Filtrado por texto (ignorando mayúsculas/minúsculas)
        const filtered = data.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        );

        setProducts(filtered);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p>{error}</p>}

      {products.length > 0 ? (
        <ul className="product-grid">
          {products.map((p) => (
            <li key={p.id} className="product-card">
              <img src={p.image} alt={p.title} />
              <h4>{p.title}</h4>
              <p>{p.price} USD</p>
            </li>
          ))}
        </ul>
      ) : (
        search && <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export { Search }