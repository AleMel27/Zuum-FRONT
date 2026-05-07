import { useEffect, useState } from "react";
import CategoryPage from "./components/prendas/CategoryPage.jsx";

function Blusas() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7159/api/Productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data.filter(p => p.id_categoria === 2));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <CategoryPage titulo="Blusas" productos={productos} />
  );
}

export default Blusas;