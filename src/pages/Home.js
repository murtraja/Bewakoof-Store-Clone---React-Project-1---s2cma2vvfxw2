import { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getProductsDealOfTheDay,
  getProductsTopTrending,
} from "../api/api";

export default function Home() {
  useEffect(() => {
    async function getData() {
      let result = await getProductsDealOfTheDay();
      result = await getProductsTopTrending();
      result = await getProductsByCategory("ac");
    }
    getData();
  }, []);
  return <h1>This is my croma website</h1>;
}
