import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserType from '../types/user';

function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback((email: string) => {
    setLoading(true);
    axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${email}`).then((res) => {
      if (res.data) {
        navigate('/');
      } else {
        alert('Invalid email');
      }
    }).catch((err) => {
      alert('Invalid email');
    }).finally(() => {
      setLoading(false);
    });
  }, [navigate]);

  return { login, isLoading: loading };
}

export default useAuth;
