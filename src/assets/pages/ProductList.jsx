import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";
import ProductImg from '../img/ProductImg.png';

function ProductList() {
  const [products, setProducts] = useState([]);

  const updateProductsList = useCallback((productsResponse) => {
    setProducts(productsResponse);
  }, [products]);

  const fetchAllProducts = async () => {
    const response = await fetch('http://localhost:3000/produtos', { method: 'GET' });

    const products = await response.json();

    updateProductsList(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Produtos Disponíveis</h2>
      <div className={styles.productList}>
        {products?.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <Link to={`/product/${product.id}`} className={styles["product-item"]}>
              <img src={ProductImg} alt={product.name} />
            </Link>
            <p>{product.nome}</p>
          </div>
        ))}
      </div>

{/*       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  );
}

export default ProductList;
