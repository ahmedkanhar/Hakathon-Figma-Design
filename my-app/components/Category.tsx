"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface Category {
  name: string;
}

interface CategoryProps {
  onCategorySelect: (category: string) => void;
}

export default function Category({ onCategorySelect }: CategoryProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Query to fetch all unique categories
  const query = `*[_type == "product"].category`;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: string[] = await client.fetch(query); // Explicitly typing data as a string array
        const uniqueCategories = Array.from(new Set(data)).map((category) => ({
          name: category as string, // Explicitly asserting category as string
        }));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-2">
      {/* <h2 className="text-lg font-semibold mb-2">Filter by Category</h2> */}
      <ul className="flex gap-4 flex-wrap">
        <li>
          <button
            onClick={() => onCategorySelect("")} // Show all products
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.name}>
            <button
              onClick={() => onCategorySelect(category.name)}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
