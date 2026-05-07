import { useEffect, useState } from "react";
import CategoryPage from "./components/prendas/CategoryPage.jsx";

function Vestidos() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7159/api/Productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data.filter(p => p.id_categoria === 1));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <CategoryPage titulo="Vestidos" productos={productos} />
  );
}

export default Vestidos;