import { NextApiRequest, NextApiResponse } from 'next';
import client from '@/sanity/lib/client'; // Adjust path as needed
import axios from 'axios';

type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch data from the external API
    const { data }: { data: Product[] } = await axios.get(
      'https://template-0-beta.vercel.app/api/product'
    );

    // Ensure that products are returned
    if (!data || data.length === 0) {
      throw new Error('No products found in the external API');
    }

    // Insert each product into Sanity
    const promises = data.map((product) =>
      client.createOrReplace({
        _type: 'product',
        _id: product.id, // Use external API's ID to prevent duplicates
        name: product.name,
        imagePath: product.imagePath,
        price: product.price,
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      })
    );

    // Wait for all insertions to complete
    await Promise.all(promises);

    res.status(200).json({ message: 'Products successfully inserted into Sanity!' });
  } catch (error) {
    console.error('Error fetching or inserting products:', error);
    res.status(500).json({ error: 'Failed to fetch or insert products' });
  }
}
