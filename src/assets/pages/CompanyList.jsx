import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import styles from "./SellerPage.module.css";
import SellerImg from "../img/Seller.png";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const updateCompaniesList = useCallback((productsResponse) => {
    setCompanies(productsResponse);
  }, [companies]);

  const fetchAllCompanies = async () => {
    const response = await fetch('http://localhost:3000/empresas', { method: 'GET' });

    const products = await response.json();

    updateCompaniesList(products);
  };

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Empresas</h2>
      <div className={styles.sellerList}>
        {companies?.map((company) => (
          <div className={styles.sellerCard} key={company.id}>
            <Link to={`/worker/${company.id}`} className={styles["seller-item"]}>
              <img src={SellerImg} alt={company.name} />
            </Link>
            <p>{company.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;

