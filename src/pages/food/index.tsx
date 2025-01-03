import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const FoodPage = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const getData = () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? '';
    setisLoading(true);
    axios
      .get(apiUrl, {
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
    getData();
  }, []);

  return (
    <div>
      Food list page
      {isLoading ? (
        <p>loading</p>
      ) : (
        <ul>
          {data.map((item: any) => {
            return (
              <li onClick={() => router.push(`/food/${item.id}`)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FoodPage;
