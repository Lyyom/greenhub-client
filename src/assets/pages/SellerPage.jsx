import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SellerPage.module.css";
import SellerImg from "../img/Seller.png";

function SellerPage() {
  const [sellers, setSellers] = useState([]);

  const updateProductsList = useCallback((sellersResponse) => {
    setSellers(sellersResponse);
  }, [sellers]);

  const fetchAllSellers = async () => {
    const response = await fetch('http://localhost:3000/funcionarios', { method: 'GET' });

    const products = await response.json();

    updateProductsList(products);
  };

  useEffect(() => {
    fetchAllSellers();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Funcionarios</h2>
      <div className={styles.sellerList}>
        {sellers?.map((seller) => (
          <div className={styles.sellerCard} key={seller.id}>
            <Link to={`/worker/${seller.id}`} className={styles["seller-item"]}>
              <img src={SellerImg} alt={seller.name} />
            </Link>
            <p>{seller.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellerPage;

