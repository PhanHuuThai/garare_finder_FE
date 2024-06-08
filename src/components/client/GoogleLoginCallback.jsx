import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const GoogleLoginCallback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
        const userData = JSON.parse(searchParams.get('user'));
      login(token);
      navigate('/');
    } else {
      // Handle error case when token is not provided
      console.error('Token not found in URL');
    }
  }, [login, navigate, searchParams]);

  return <div>Redirecting...</div>;
};

export default GoogleLoginCallback;