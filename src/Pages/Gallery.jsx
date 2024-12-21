import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  // Fetch cupcake data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products)) // Update state with fetched data
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-16 space-y-3">
      <p className="text-7xl font-[Oswald] font-light tracking-widest text-center mt-10">
        Products
      </p>

      <p className="text-2xl font-[Oswald] font-light tracking-widest text-center mt-10">
        "Indulge in our heavenly cupcakes, lovingly crafted with premium
        ingredients to make every celebration sweeter!"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 p-20">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-10 flex flex-col items-center border-1 border-pink border-solid border"
          >
            <img
              src={item.thumbnail} // Use API thumbnail for the image
              className="w-full h-full object-cover mb-4 rounded-md"
              alt={item.title}
            />

            <p className="text-2xl font-[Poppins] font-medium text-justify mb-2">
              {item.title}
            </p>

            <p className="text-2xl font-[Poppins] font-medium text-justify mb-2">
              ₱{item.price}
            </p>

            <button className="btn mt-10 w-full">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
