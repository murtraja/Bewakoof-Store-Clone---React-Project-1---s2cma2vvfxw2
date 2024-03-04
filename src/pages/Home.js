import { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getLowestPricesOfTheDay,
  getProductsTopTrending,
} from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [topTrending, setTopTrending] = useState([]);
  useEffect(() => {
    async function getData() {
      let result = await getLowestPricesOfTheDay();
      const resultTopTrending = await getProductsTopTrending();
      result = await getProductsByCategory("ac");
      setTopTrending(resultTopTrending);
    }
    getData();
  }, []);
  return (
    <section>
      <h1>Top trending</h1>
      <div style={{ width: "90vw", overflowX: "scroll" }}>
        <div style={{ display: "flex" }}>
          {topTrending.map((prod) => (
            <ProductCard key={prod._id} details={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
