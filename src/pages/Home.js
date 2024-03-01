import { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getProductsDealOfTheDay,
  getProductsTopTrending,
} from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [topTrending, setTopTrending] = useState([]);
  useEffect(() => {
    async function getData() {
      let result = await getProductsDealOfTheDay();
      const resultTopTrending = await getProductsTopTrending();
      result = await getProductsByCategory("ac");
      setTopTrending(resultTopTrending);
    }
    getData();
  }, []);
  return (
    <section>
      <h1>Top trending</h1>
      {topTrending.map((prod) => (
        <ProductCard key={prod._id} details={prod} />
      ))}
    </section>
  );
}
