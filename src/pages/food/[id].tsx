import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const FoodDetail = () => {
  const [data, setdata]: any = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const getData = () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? '';
    setisLoading(true);
    axios
      .get(`${apiUrl}/${router.query.id}`, {
        headers: {
          'Content-Type': 'application/json',
          apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
        },
      })
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  useEffect(() => {
    if (router.query.id) getData();
  }, [router.query.id]);

  return (
    <div>
      <p onClick={() => router.push('/food')}>back to list</p>
      Food Detail:
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default FoodDetail;
