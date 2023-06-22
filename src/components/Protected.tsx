import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../utils/store/appStore';

export default function Protected({ children }) {
  const navigate = useNavigate();
  const { isLogin } = useAppStore();

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth/signin');
    }
  });
  return children;
}
