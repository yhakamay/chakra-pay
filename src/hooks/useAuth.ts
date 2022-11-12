import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserType from '../types/user';
import useMessage from './useMessage';

function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const login = useCallback((email: string) => {
    setLoading(true);
    axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${email}`).then((res) => {
      if (res.data) {
        showMessage({ title: 'ログインしました', status: 'success' });
        navigate('/');
      } else {
        showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
      }
    }).catch((err) => {
      showMessage({ title: 'ログインできません', status: 'error' });
    }).finally(() => {
      setLoading(false);
    });
  }, [navigate, showMessage]);

  return { login, isLoading: loading };
}

export default useAuth;
