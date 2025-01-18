import Link from 'next/link'; // Optional: for linking to other pages
import { GetServerSideProps } from 'next';
import client from '@/sanity/lib/client'; // Make sure the path to your Sanity client is correct

type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
};

type Props = {
  products: Product[];
};

const HomePage = ({ products }: Props) => {
  return (
    <div>
      <h1>Welcome to Our Store!</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagePath} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      {/* Optional: Add links to other pages */}
      <Link href="/product">View All Products</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch products from Sanity
  const products = await client.fetch(`*[_type == 'product']`);

  return {
    props: { products },
  };
};

export default HomePage;
