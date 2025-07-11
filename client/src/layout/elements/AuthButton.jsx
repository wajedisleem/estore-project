import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthProvider';

import styles from './AuthButton.module.css';

const AuthButton = ({ mobile = false }) => {
  const { loading, login, verify, currentUser, logout } = useAuth();

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <a onClick={!currentUser ? login : logout} className={`${styles['btn-auth']} ${mobile && styles['btn-auth-mobile']}`}>
      {!currentUser ? 'Login' : 'Logout'}
    </a>
  );
};
export { AuthButton };
