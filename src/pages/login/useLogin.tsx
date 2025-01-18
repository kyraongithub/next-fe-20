import { handleLogin } from '@/services/auth';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';

const useLogin = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const handleFormLogin = async () => {
    try {
      const response = await handleLogin(formData);
      setCookie('token', response.data.token);
      router.push('/');
    } catch (err: unknown | any) {
      //error handling
      Swal.fire({
        title: 'Login Failed!',
        text: err.response.data.message,
        icon: 'error',
      }).then((result) => {
        if (result.isConfirmed) {
          // confirm result
        }
      });
    }
  };
  return { handleFormLogin, setformData, formData };
};

export default useLogin;
