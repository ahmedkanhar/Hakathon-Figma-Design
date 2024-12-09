import Link from 'next/link';
import Image from 'next/image';

const ProductBox = ({ image, name, price }: { image: string; name: string; price: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[300px] h-[300px] mb-4">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-[16px] font-medium text-black mb-3 text-start w-full">
        {name}
      </div>
      <div className="text-xl font-bold text-gray-800 text-start w-full">
        {price}
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    { image: "/images/modularsofa.png", name: "Trenton modular sofa_3", price: "Rs.25000.00", href: "/sofadetails" },
    { image: "/images/outdoor.png", name: "Granite dining table with chair", price: "Rs.25000.00", href: "/sofadetails" },
    { image: "/images/diningtable.png", name: "Outdoor bar table and stool", price: "Rs.25000.00", href: "/sofadetails" },
    { image: "/images/Asgaard.png", name: "Asgaard Sofa", price: "Rs.30000.00", href: "/sofadetails" },
    { image: "/images/kenttable.png", name: "Kent Table", price: "Rs.35000.00", href: "/sofadetails" },
    { image: "/images/roundtable.png", name: "Round Table", price: "Rs.40000.00", href: "/sofadetails" },
    { image: "/images/teaktable.png", name: " Teak Table", price: "Rs.5000.00", href: "/sofadetails" },
    { image: "/images/Plainconsole1.png", name: "Plain Console", price: "Rs.45000.00", href: "/sofadetails" },
    { image: "/images/sideboard.png", name: "Wooden Sideboard", price: "Rs.20000.00", href: "/sofadetails" },
    { image: "/images/SJP0825.png", name: "SJP-0825", price: "Rs.12000.00", href: "/sofadetails" },
    { image: "/images/bellachair.png", name: "Minimalist coffee table", price: "Rs.10000.00", href: "/sofadetails" },
    { image: "/images/square.png", name: "Square Table", price: "Rs.8000.00", href: "/sofadetails" },
    { image: "/images/mayasofa.png", name: "Maya Sofa", price: "Rs.60000.00", href: "/sofadetails" },
    { image: "/images/outdoorsofa.png", name: "Outdoor Sofa", price: "Rs.4000.00", href: "sofadetails" },
    { image: "/images/diningtable.png", name: "Outdoor bar table and stool", price: "Rs.25000.00", href: "/pagedetails/3" },
    { image: "/images/Asgaard.png", name: "Asgaard Sofa", price: "Rs.30000.00", href: "/sofadetails" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-12 py-8 bg-white gap-8">
      {products.map((product, index) => (
        <Link key={index} href={product.href}>
          <ProductBox image={product.image} name={product.name} price={product.price} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
