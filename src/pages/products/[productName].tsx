import { useRouter } from 'next/router';
import React from 'react';

const Product = () => {
  const router = useRouter();
  return (
    <div>
      Product: {router.query.productName}
      <h1 onClick={() => router.push('/')}>back to home</h1>
    </div>
  );
};

export default Product;
