'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  image: string;
  model: string;
  loadIndex: string;
  cars: string[];
  pattern: string;
  speedRating: string;
  temperature: string;
  traction: string;
  treadwear: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const terms = searchTerm.toLowerCase().split(" ").filter(Boolean);
  
      const filtered = products.filter((product) =>
        terms.every(
          (term) =>
            product.name.toLowerCase().includes(term) ||
            product.model.toLowerCase().includes(term) ||
            product.cars.some((car) => car.toLowerCase().includes(term))
        )
      );
  
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);
  

  return (
    <div className="w-full flex justify-center flex-col h-full">
      <div className="border-gray-500 w-1/2 mx-auto mb-4">
        <label htmlFor="search" className="block text-sm/6 font-medium text-white">
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Pesquisar produtos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
      </div>

      <div className="mb-4 border-b border-1"></div>

      <div data-testid="products" className="w-full max-w-6xl mx-auto px-4">
        {isLoading ? (
          <p className="text-center text-gray-500">Carregando produtos...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum produto encontrado</p>
        ) : (
          <div className="flex flex-col gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} data-testid="product">
                <ProductCard
                  name={product.name}
                  image={product.image}
                  model={product.model}
                  loadIndex={product.loadIndex}
                  speedRating={product.speedRating}
                  treadwear={product.treadwear}
                  temperature={product.temperature}
                  pattern={product.pattern}
                  traction={product.traction}
                  cars={product.cars}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
